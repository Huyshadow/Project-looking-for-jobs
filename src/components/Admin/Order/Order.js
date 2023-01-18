import React from "react";
import styles from "../../../css/Order.module.css";
const Order = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Order</h1>
        <div className={styles.note}>
          <p>
            <i>Last updated 24h ago</i>
          </p>
        </div>
        <main>
          <table>
            <thead>
              <tr>
                <td>OrderID</td>
                <td>UserID</td>
                <td>Status</td>
                <td>Manager ID</td>
                <td>Warehouse Code</td>
                <td>Transportation Code</td>
                <td></td>
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
