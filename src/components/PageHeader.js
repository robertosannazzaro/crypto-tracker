import React, { useState, useEffect } from "react";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import "./css/PageHeader.css";

import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../reducer/StateProvider";
import { initialState } from "../reducer/reducer";

const { Header } = Layout;

function PageHeader() {
  const [state, dispatch] = useStateValue();

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        setUser(user.attributes.email);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const signOut = async () => {
    await Auth.signOut();
    history.push("/signin");
  };

  return (
    <Header className='pageHeader'>
      <h1 className='pageHeader__title'>
        Crypto Tracker{" "}
        <span role='img' aria-label='emoji'>
          🤑
        </span>
      </h1>
      {user && (
        <div className='pageHeader__user'>
          <h3>Welcome, {user}</h3>{" "}
          <Button type='text' danger onClick={signOut}>
            Logout
          </Button>
        </div>
      )}
    </Header>
  );
}

export default PageHeader;
