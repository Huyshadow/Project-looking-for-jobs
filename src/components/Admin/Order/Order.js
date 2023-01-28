import React from "react";
import styles from "../../../css/Order.module.css";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FetchOrder } from "../../../api/AdminApi";
import InsertOrder from "./InsertOrder";

const Order = () => {
  const [insert, setInsert] = useState(false);
  const [lists, setLists] = useState([]);
  const UpdateOrder = () => {};
  const DeleteOrder = () => {};

  useEffect(() => {
    (async () => {
      const res = await FetchOrder();
      if (res) {
        setLists(res);
      }
      console.log(res);
    })();
  }, []);
  const handleChange = () => {};
  return (
    <>
      {!insert && (
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
          <div className={styles.button_container}>
            <button
              className={styles.btn}
              onClick={() => {
                setInsert(true);
              }}
            >
              Insert
            </button>
          </div>
        </div>
      )}
      {insert && InsertOrder}
    </>
  );
};
export default Order;
