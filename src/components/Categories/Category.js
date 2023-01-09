import React from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import styles from "../../css/Category.module.css";
const Category = ({ title, description }) => {
  return (
    <article>
      <BsCalendar2CheckFill className={styles.signature} />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};
export default Category;
