import React from "react";
import styles from "../../../css/DashBoard.module.css";
import CardDB from "./CardDB";

const DashBoard = () => {
  var today = new Date();
  const datetime =
    today.getFullYear() +
    " - " +
    (today.getMonth() + 1) +
    " - " +
    today.getDate();
  const CardDataSet = [
    {
      Topic: "Total Sales",
      Cost: "25,048",
      Percent: "81%",
      array: 110,
      offset: 30,
    },
    {
      Topic: "Total Cost",
      Cost: "15,000",
      Percent: "51%",
      array: 90,
      offset: 40,
    },
    {
      Topic: "Total Profit",
      Cost: "10,048",
      Percent: "40%",
      array: 105,
      offset: 92,
    },
  ];
  return (
    <main>
      <h1>DashBoard</h1>
      <div className={styles.date}>{datetime}</div>
      <div className={styles.insights}>
        {CardDataSet.map((card) => {
          return (
            <div>
              <CardDB
                Topic={card.Topic}
                Cost={card.Cost}
                Percent={card.Percent}
                array={card.array}
                offset={card.offset}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default DashBoard;
