import React, { useState } from "react";
import "../style/Login.css";
import AmazonLogo from "../../images/Amazon_logo2.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signIn =  (e) => {
    e.preventDefault()
     signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // const user = userCredential.user;
        // console.log(user);
        updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
          console.log(err)
        );
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="logo" src={AmazonLogo} alt="" />
      </Link>
      <div className="loginContainer">
        <h1 className="loginTitle">Sign-In</h1>
        <form action="">
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <h5>E-mail</h5>
          <input
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button
            onClick={signIn}
            className="signIn"
          >
            Sign In
          </button>

          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Internet Based
            Ads.
          </p>
        </form>
        <button
          onClick={() => register(username, email, password)}
          className="register"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
