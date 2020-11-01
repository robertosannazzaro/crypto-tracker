import React, { useState } from "react";
import "./css/signUp.css";

import { useHistory, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useStateValue } from "../reducer/StateProvider";

import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, dispatch] = useStateValue();

  const onFinish = (values) => {
    signUpCognito();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  async function signUpCognito() {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
      });
      console.log("USER IS:", user);
      dispatch({ type: "SET_USERNAME_FOR_CONFIRMATION", username: email });
      history.push("/confirm-sign-up");
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <div className='signUp__container'>
      <h1>Crypto Tracker</h1>
      <h2>Sign Up</h2>
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='email'
          name='email'
          rules={[{ required: true, message: "Please input your email!" }]}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className='signUp__button' type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to='/signin'>Or Sign In</Link>
    </div>
  );
}

export default SignUp;
