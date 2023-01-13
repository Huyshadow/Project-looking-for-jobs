import React from "react";
import styles from "../../css/General.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdProductionQuantityLimits, MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
const General = () => {
  return (
    <>
      <section className={styles.container}>
        <aside className={styles.container_1}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <h1 className={styles.text_muted}>
                <span style={{ color: "#32cc4c" }}>Admin page</span>
              </h1>
            </div>
            <div className={styles.close} id="close-btn">
              <AiOutlineCloseCircle />
            </div>
            <div className={styles.sidebar}>
              <Link to="/admin">
                <span>
                  <MdDashboard />
                </span>
                <h3>DashBoard</h3>
              </Link>
              <Link to="/admin/user" className={styles.active}>
                <span>
                  <FiUsers />
                </span>
                <h3>Customer</h3>
              </Link>
              <Link to="/admin/product">
                <span>
                  <MdProductionQuantityLimits />
                </span>
                <h3>Products</h3>
              </Link>
              <a href="#">
                <span>
                  <CiLogout />
                </span>
                <h3>Logout</h3>
              </a>
            </div>
          </div>
        </aside>
        <div className={styles.container_2}></div>
        <div className={styles.container_3}></div>
      </section>
    </>
  );
};
export default General;
