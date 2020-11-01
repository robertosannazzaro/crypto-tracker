import React from "react";
import "./css/ConfirmSignUp.css";
import { useHistory } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Auth } from "aws-amplify";
import { useStateValue } from "../reducer/StateProvider";

function ConfirmSignUp() {
  const [{ username }] = useStateValue();

  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values.code);
    confirmSignUp(username, values.code);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  async function confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
      history.push("/signin");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
  return (
    <div className='confirmSignUp'>
      <h2>Confirm sign up</h2>
      <p>Check your email and enter the code you received</p>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className='confirmSignUp__form'
      >
        <Form.Item label='Username' name='username'>
          <Input defaultValue={username} value={username} />
        </Form.Item>

        <Form.Item label='Code' name='code'>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ConfirmSignUp;
