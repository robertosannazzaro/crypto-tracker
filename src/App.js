import React, { useState, useEffect } from "react";
import "./App.css";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ConfirmSignUp from "./components/ConfirmSignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import { useStateValue } from "./reducer/StateProvider";
import { Auth } from "aws-amplify";

import LandingPage from "./components/LandingPage";

function App() {
  const [, dispatch] = useStateValue();
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user.attributes);
        dispatch({ type: "SET_USER", user: user.attributes });
        setUser(user.attributes.email);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        <Switch>
          {user ? (
            <Route path='/home' component={Home} />
          ) : (
            <Route exact path='/signin' component={SignIn} />
          )}
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/confirm-sign-up' component={ConfirmSignUp} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
