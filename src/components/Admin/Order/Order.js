import React from "react";
import styles from "../../../css/Order.module.css";
import { BsSearch } from "react-icons/bs";
const Order = () => {
  const UpdateOrder = () => {};
  const DeleteOrder = () => {};
  const handleChange = () => {};
  return (
    <>
      <div className={styles.container}>
        <h1>Order</h1>
        <div className={styles.note}>
          <p>
            <i>Last updated 24h ago</i>
          </p>
        </div>

        <form>
          <div className={styles.input_field}>
            <BsSearch
              style={{
                width: "100%",
                marginTop: "30%",
                height: "50%",
                textAlign: "center",
                color: "#acacac",
              }}
            />
            <input
              type="email"
              placeholder="Search"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
        </form>
        <main>
          <table>
            <thead>
              <tr>
                <td>OrderID</td>
                <td>IsPaid</td>
                <td>Payment Method</td>
                <td>Created Date</td>
                <td>Total Price</td>
                <td>Setting</td>
              </tr>
            </thead>
            {/*listReport.map((report) => {
              return (
                <tbody>
                  <tr>
                    <td>{report.ID}</td>
                    <td>{report.Ngay_xuat_bien_ban}</td>
                    <td>{report.Tinh_trang}</td>
                    <td>{report.ma_nv_quan_ly_kho}</td>
                    <td>{report.ma_kho}</td>
                    <td>{report.ma_chuyen}</td>
                  </tr>
                </tbody>
              );
            })*/}
          </table>
        </main>
      </div>
    </>
  );
};
export default Order;
