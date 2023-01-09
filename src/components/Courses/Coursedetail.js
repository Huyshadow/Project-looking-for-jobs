import React from "react";
import styles from "../../css/Coursedetail.module.css";
const CourseDetail = ({ title, categories, imgUrl }) => {
  return (
    <div className={styles.course}>
      <img src={imgUrl} />
      <div className={styles.txtx}>
        <h4>{title}</h4>
        <span>{categories}</span>
      </div>
    </div>
  );
};
export default CourseDetail;
