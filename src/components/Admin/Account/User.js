import React from "react";
import { useEffect, useState } from "react";
import styles from "../../../css/User.module.css";
import { BsSearch } from "react-icons/bs";

const User = () => {
  const [lists, setLists] = useState([]);

  const handleChange = () => {};
  return (
    <>
      <div className={styles.container}>
        <h1>User</h1>
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
                <td>UserID</td>
                <td>IsPaid</td>
                <td>Payment Method</td>
                <td>Created Date</td>
                <td>Total Price</td>
              </tr>
            </thead>
            {lists.map((item) => {
              return (
                <tbody>
                  <tr key={item.orderID}>
                    <td>{item.orderID}</td>
                    <td>{item.userID}</td>
                    <td>{item.isPaid}</td>
                    <td>{item.paymentMethod}</td>
                    <td>{String(item.createdDate).slice(0, 10)}</td>
                    <td>{item.totalPrice}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </main>
      </div>
    </>
  );
};
export default User;
