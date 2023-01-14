import React from "react";
import styles from "../../css/General.module.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  MdProductionQuantityLimits,
  MdDashboard,
  MdOutlineReorder,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
//------------------------------------------------
import DashBoard from "./Dashboard/Dashboard";
import User from "./Account/User";
import Product from "./Product/Product";
import Order from "./Order/Order";

//------------------------------------------------
const General = () => {
  const [active, SetActive] = useState("db");
  const activeHandler = (e) => {
    SetActive(e);
  };
  return (
    <>
      <section className={styles.container}>
        <aside>
          <div className={styles.top}>
            <div className={styles.logo}>
              <h1 className={styles.text_muted}>
                <span style={{ color: "#32cc4c" }}>AdminPage</span>
              </h1>
            </div>
            <div className={styles.close} id="close-btn">
              <AiOutlineCloseCircle />
            </div>
            <div className={styles.sidebar}>
              <Link
                to="/admin"
                onClick={() => {
                  activeHandler("db");
                }}
                className={active === "db" ? `${styles.active}` : ``}
              >
                <span>
                  <MdDashboard />
                </span>
                <h3>DashBoard</h3>
              </Link>
              <Link
                to="/admin/user"
                onClick={() => {
                  activeHandler("cs");
                }}
                className={active === "cs" ? `${styles.active}` : ``}
              >
                <span>
                  <FiUsers />
                </span>
                <h3>Customer</h3>
              </Link>
              <Link
                to="/admin/product"
                onClick={() => {
                  activeHandler("pr");
                }}
                className={active === "pr" ? `${styles.active}` : ``}
              >
                <span>
                  <MdProductionQuantityLimits />
                </span>
                <h3>Products</h3>
              </Link>
              <Link
                to="/admin/product"
                onClick={() => {
                  activeHandler("or");
                }}
                className={active === "or" ? `${styles.active}` : ``}
              >
                <span>
                  <MdOutlineReorder />
                </span>
                <h3>Order</h3>
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
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/customer" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <div className={styles.container_3}></div>
      </section>
    </>
  );
};
export default General;
