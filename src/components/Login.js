import { useState } from "react";
import Modal from "../back/Modal";
import classes from "./Login.module.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { config } from "../Config";

const Login = (props) => {
  const [error, setError] = useState(null);
  const [isAunthenticated, setisAunthenticated] = useState(false);
  const [user, setUser] = useState({});

  // this.login = this.login.bind(this);
  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: config.appId,
      redirectUri: config.redirectUri,
      authority: config.authority,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true,
    },
  });

  const login = async () => {
    try {
      //login via popup
      await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      setisAunthenticated(true);
    } finally {
      //catch (err) {
      //  setisAunthenticated(false), setUser({}), setError(err);
      // }
      console.log("error occured");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setisAunthenticated(false);
    console.log(isAunthenticated);
    props.setZ(false);
  };

  const x = (
    <Modal onClose={props.onClose}>
      <div className={classes.log}>
        <div className={classes.font}>
          <h1>Login/Sign Up On Auto-Cart</h1>
          <p>
            Please provide your Mobile Number or Email to Login/ Sign Up on
            Auto-Cart
          </p>
        </div>
        <input
          type="text"
          placeholder="Mobile Number/ Email"
         
        ></input>
        <button className={classes.btn}>submit</button>
        <p style={{ textAlign: "center" }}>or Login Using</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button className={classes.btn1}>Facebook</button>
          <button
            className={classes.btn1}
            style={{
              backgroundColor: "white",
              color: "#737373",
              border: "1px solid black",
            }}
          >
            Microsoft
          </button>
        </div>
      </div>
    </Modal>
  );

  return <div>{x}</div>;
};

export default Login;
