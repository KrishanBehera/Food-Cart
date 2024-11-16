import React, { useEffect, useState } from "react";
import "./Login.css";
import { app } from "../Config/Config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";

function Login() {
  const [IsLogin, setIsLogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const Auth = getAuth(app);
  const AuthData = getDatabase(app);
  function Signup() {
    if (email && password.length >= 6 && username) {
      createUserWithEmailAndPassword(Auth, email, password);
      setemail("");
      setpassword("");
      setusername("");
      toast("SignUp successfull");
    } else {
      console.log("password shot");
    }
  }
  function SignIn() {
    signInWithEmailAndPassword(Auth, email, password);
    setemail("");
    setpassword("");
    toast("Login successfully");
  }
  function getData() {
    set(ref(AuthData, "User/Email"), {
      Email: email,
      Password: password,
      Username: username,
    });
  }
  return (
    <div>
      {IsLogin ? (
        <div className="font">
          <h1>Sing Up</h1>
          <div className="input">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name..."
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email.."
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="Password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              className="login-btn"
              onClick={() => {
                Signup();
                getData();
              }}
            >
              Sign Up
            </button>
          </div>
          <p>
            Already Have An Account ?
            <span onClick={() => setIsLogin(false)}> Login</span>
          </p>
        </div>
      ) : (
        <div className="Login">
          <h1>Login</h1>
          <div className="input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter yor Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="login-btn" onClick={SignIn}>
              Login
            </button>
          </div>
          <p>
            Dont have an Account ?{" "}
            <span onClick={() => setIsLogin(true)}>Create Account</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
