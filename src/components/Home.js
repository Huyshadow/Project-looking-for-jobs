import React from "react";
import styles from "../css/Home.module.css";
import { useNavigate } from "react-router";
import Headeright from "../public/headeright.svg";
const Home = () => {
  const navigate = useNavigate();
  function Navigatetocourse() {
    navigate("/course");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <h1>Grow your skill to advance your career path</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              mauris id eros viverra fringilla. Cras eget tempus dolor. Ut
              ultrices in ex sit amet aliquet.
            </p>
            <button className={styles.btn} onClick={Navigatetocourse}>
              Get Started
            </button>
          </div>
          <div className={styles.headeright}>
            <div className={styles.headeright_img}>
              <img src={Headeright} alt="Header" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
