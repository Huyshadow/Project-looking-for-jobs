import React, { useEffect } from "react";
import styles from "../../css/General.module.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  MdProductionQuantityLimits,
  MdDashboard,
  MdOutlineReorder,
} from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { FiUsers } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
//------------------------------------------------
import DashBoard from "./Dashboard/Dashboard";
import User from "./Account/User";
import Product from "./Product/Product";
import Order from "./Order/Order";
//------------------------------------------------
import img1 from "../../public/img/admin/avatar.png";
//------------------------------------------------
const General = ({ logout }) => {
  const [firsttime, SetFirsttime] = useState(true);
  const navigate = useNavigate();
  const [active, SetActive] = useState("db");
  const activeHandler = (e) => {
    SetActive(e);
  };

  useEffect(() => {
    const NavigatetoAdmin = () => {
      navigate("/admin");
      SetFirsttime(false);
    };
    if (firsttime) NavigatetoAdmin();
  }, [firsttime, navigate]);

  const navigatetoDefault = () => {
    navigate("/");
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
                to="/admin/order"
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
              <a
                onClick={() => {
                  logout();
                  navigatetoDefault();
                }}
                href="#"
              >
                <span>
                  <CiLogout />
                </span>
                <h3>Logout</h3>
              </a>
            </div>
          </div>
        </aside>
        <Routes>
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/admin/user" element={<User />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/order" element={<Order />} />
        </Routes>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.profiles}>
              <div className={styles.info}>
                <p>
                  Welcome back, <b>Quang Huy</b>{" "}
                </p>
                <small>Admin</small>
              </div>
              <div className={styles.profile_photo}>
                <img src={img1} alt="admin" />
              </div>
            </div>
          </div>

          <div>
            <h2>Recent Updates</h2>
            <div className={styles.updates}>
              <div className={styles.update}>
                <div className={styles.profile_photo}>
                  <img src={img1} alt="admin" />
                </div>
                <div>
                  <p>
                    <b>Admin</b> has update Product with quantity 2
                  </p>
                  <small>Updated 1 weeks ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profile_photo}>
                  <img src={img1} alt="admin" />
                </div>
                <div>
                  <p>
                    <b>Admin</b> has update WareHouse with quantity 1
                  </p>
                  <small>Updated 2 weeks ago</small>
                </div>
              </div>

              <div className={styles.update}>
                <div className={styles.profile_photo}>
                  <img src={img1} alt="admin" />
                </div>
                <div>
                  <p>
                    <b>Admin</b> has delete Employe with quantity 3
                  </p>
                  <small>Updated 1 weeks ago</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.annoucement}>
            <div className={styles.annoucetitle}>
              <h2>Annoucement</h2>

              <TfiAnnouncement
                style={{ width: "30px", height: "25px", color: "green" }}
              />
            </div>
            <div className={styles.note}>
              <div className={styles.over}>
                <div className={styles.right}>
                  <div className={styles.title}>
                    <h3>BROKEN TRUNKS</h3>
                    <small>Last 24 hours ago</small>
                  </div>
                  <p>Some Trunks have been broken, fix it quickly</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.title}>
                    <h3>NEXT MEETING</h3>
                    <small>Last 24 hours ago</small>
                  </div>
                  <p>
                    The next meeting will be occured on Tuesday, 6th December,
                    2022
                  </p>
                </div>
                <div className={styles.right}>
                  <div className={styles.title}>
                    <h3>FIRED EMPLOYEE</h3>
                    <small>Last 24 hours ago</small>
                  </div>
                  <p>
                    Elen has been fired for some reason, detail in the next
                    meeting
                  </p>
                </div>
                <div className={styles.right}>
                  <div className={styles.title}>
                    <h3>NEW SUCCESS</h3>
                    <small>Last 24 hours ago</small>
                  </div>
                  <p>Our Assignment will get High grade</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.title}>
                    <h3>BE CAREFUL</h3>
                    <small>Last 24 hours ago</small>
                  </div>
                  <p>
                    The new Tower is being builed, don't enter the dangerous
                    place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default General;
