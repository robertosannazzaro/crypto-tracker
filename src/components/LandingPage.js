import React from "react";
import "./css/LandingPage.css";

import { Link } from "react-router-dom";
import { Button } from "antd";

import { useStateValue } from "../reducer/StateProvider";

function LandingPage() {
  const [{ user }] = useStateValue();
  console.log("user is: ", user);
  return (
    <div className='landingPage'>
      <h1>Crypto Tracker 🤑</h1>
      <p>
        Welcome to cryptotracker, signup and keep track of you crypto
        investments!
      </p>
      {user ? (
        <Button primary>
          <Link to='/home'>Get started!</Link>
        </Button>
      ) : (
        <Button primary>
          <Link to='/signin'>Sign in or sign up!</Link>
        </Button>
      )}
    </div>
  );
}

export default LandingPage;
