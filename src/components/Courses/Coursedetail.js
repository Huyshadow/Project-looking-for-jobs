import React from "react";
import { useNavigate } from "react-router";
import styles from "../../css/Coursedetail.module.css";
const CourseDetail = ({ title, categories, imgUrl }) => {
  const navigate = useNavigate();
  function navigatetoDetail() {
    navigate("/course/ele");
  }
  return (
    <div className={styles.course}>
      <img src={imgUrl} />
      <div className={styles.txtx}>
        <h4>{title}</h4>
        <span>{categories}</span>
        <button className={styles.btn}>Detail</button>
      </div>
    </div>
  );
};
export default CourseDetail;
