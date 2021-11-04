import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useState } from "react";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState(""); //call the setEmail function to update the email state
  const [password, setPassword] = useState(""); //call the setPassword function to update the password state

  const login = (event) => {
    event.preventDefault(); // this stops the refresh of the page
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // this stops the refresh of the page
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)} //function to update the email state
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)} //function to update the password state
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's terms and conditions of use and
          sale. Please see our Privacy policy for further information.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
