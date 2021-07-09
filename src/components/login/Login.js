import React from "react";
import { auth, provider } from "../../firebase";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";

const Login = ({ setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__logo">
          <TwitterIcon className="login__twitterIcon" />
        </div>

        <button className="login__button" onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
