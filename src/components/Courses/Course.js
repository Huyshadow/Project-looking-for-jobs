import React from "react";
import styles from "../../css/Course.module.css";

const Course = () => {
  function onClickCheck() {}
  return (
    <>
      <section className={styles.container}>
        <div className={styles.course}>
          <div className={styles.course_left}>
            <div>
              <input type="text" name="search" placeholder="Search" />
            </div>
            <div>
              <ul>
                <li onClick={onClickCheck}>Blockchain</li>
                <li onClick={onClickCheck}>Graphic Design</li>
                <li onClick={onClickCheck}>Ai Development</li>
                <li onClick={onClickCheck}>Web Development</li>
                <li onClick={onClickCheck}>Data Analysist</li>
                <li onClick={onClickCheck}>Internet of thing</li>
              </ul>
            </div>
          </div>
          <div className={styles.course_right}></div>
        </div>
      </section>
    </>
  );
};
export default Course;
