import React from "react";
import styles from "../css/Home.module.css";
import { useNavigate } from "react-router";
import Headeright from "../public/headeright.svg";
import { Link } from "react-router-dom";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
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
              <img src={Headeright} alt="Header" className={styles.img_ani} />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_1}>
            <h4>HUYLEARN</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              mauris id eros viverra fringilla. Cras eget tempus dolor. Ut
              ultrices in ex sit amet aliquet.
            </p>
          </div>
          <div className={styles.footer_2}>
            <h4>Primacy</h4>
            <ul className={styles.privacy}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_3}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <AiOutlinePhone className={styles.contactme} />
                Number: 0854001109
              </li>
              <li>
                <AiOutlineMail className={styles.contactme} />
                Email: huy.dang110902@gmail.com
              </li>
            </ul>
            <ul className={styles.linkme}>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <AiFillLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
