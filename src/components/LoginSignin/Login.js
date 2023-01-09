import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Learn1 from "../../public/learn1.svg";
import Learn2 from "../../public/learn2.svg";
import SignUp from "./Signup";
import styles from "../../css/Login.module.css";

const Login = () => {
  const [signUp, SetSignUp] = useState(false);
  function handlerChangeAnimate() {
    if (signUp === false) {
      SetSignUp(true);
    } else {
      SetSignUp(false);
    }
  }
  const handleChange = () => {};

  return (
    <>
      {/*signup form*/}
      <div
        className={
          signUp
            ? `${styles.container} ${styles.sign_up_mode}`
            : `${styles.container}`
        }
      >
        <div className={styles.form_container}>
          <div className={styles.signin_signup}>
            <form action="" className={styles.sign_in_form}>
              <h2 className={styles.title}>Login</h2>
              <div className={styles.input_field}>
                <AiOutlineUser
                  style={{
                    width: "100%",
                    marginTop: "20%",
                    height: "50%",
                    textAlign: "center",
                    color: "#acacac",
                  }}
                />
                <input
                  type="email"
                  placeholder="@company.com"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input_field}>
                <RiLockPasswordFill
                  style={{
                    width: "100%",
                    marginTop: "20%",
                    height: "50%",
                    textAlign: "center",
                    color: "#acacac",
                  }}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
              <input type="submit" value="Login" className={styles.btn} />
            </form>
            <SignUp Check={signUp} />
          </div>
        </div>
        <div className={styles.panels_container}>
          <div className={`${styles.panel} ${styles.left_panel}`}>
            <div className={styles.content}>
              <h3>New here ?</h3>
              <p>Wanna be one of us, just Sign up :3</p>
              <button
                onClick={handlerChangeAnimate}
                class={`${styles.btn} ${styles.transparent}`}
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={Learn1} />
          </div>
          <div className={`${styles.panel} ${styles.right_panel}`}>
            <div className={styles.content}>
              <h3>One of us ?</h3>
              <p>Then, Let just sign in :3</p>
              <button
                onClick={handlerChangeAnimate}
                class={`${styles.btn} ${styles.transparent}`}
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={Learn2} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
