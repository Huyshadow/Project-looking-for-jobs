import React from "react";
import styles from "../../css/Course.module.css";
import { BsSearch } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineGraphicEq } from "react-icons/md";
import { GiMagnetMan } from "react-icons/gi";
import { MdWeb } from "react-icons/md";
import { BiData } from "react-icons/bi";
import { GiRadioTower } from "react-icons/gi";
import { useState } from "react";
import Learn4 from "../../public/learn4.svg";
import CourseDetail from "./Coursedetail";
import courseImg1 from "../../public/img/react.jpg";
import courseImg2 from "../../public/img/react.jpg";
import courseImg3 from "../../public/img/react.jpg";

const Course = () => {
  const course = [
    {
      title: "React",
      categories: "Web Development",
      imgUrl: courseImg1,
    },
    {
      title: "NodeJs",
      categories: "Web Development",
      imgUrl: courseImg2,
    },
    {
      title: "Rupy",
      categories: "Ai Development",
      imgUrl: courseImg3,
    },
    {
      title: "React",
      categories: "Web Development",
      imgUrl: courseImg1,
    },
    {
      title: "NodeJs",
      categories: "Web Development",
      imgUrl: courseImg2,
    },
    {
      title: "Rupy",
      categories: "Ai Development",
      imgUrl: courseImg3,
    },
  ];
  const [activelink, setActiveLink] = useState("");
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const handleChange = () => {};
  return (
    <>
      <section className={styles.container}>
        <div className={styles.course}>
          <div className={styles.course_left}>
            <div>
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
            </div>

            <div className={styles.categories}>
              <ul>
                <li
                  className={
                    activelink === "bl"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("bl")}
                >
                  <SiHiveBlockchain style={{ marginRight: "10px" }} />
                  Blockchain
                </li>
                <li
                  className={
                    activelink === "gd"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("gd")}
                >
                  <MdOutlineGraphicEq style={{ marginRight: "10px" }} />
                  Graphic Design
                </li>
                <li
                  className={
                    activelink === "ai"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("ai")}
                >
                  <GiMagnetMan style={{ marginRight: "10px" }} />
                  Ai Development
                </li>
                <li
                  className={
                    activelink === "wd"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("wd")}
                >
                  <MdWeb style={{ marginRight: "10px" }} />
                  Web Development
                </li>
                <li
                  className={
                    activelink === "dt"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("dt")}
                >
                  <BiData style={{ marginRight: "10px" }} />
                  Data Analysist
                </li>
                <li
                  className={
                    activelink === "iot"
                      ? `${styles.active} ${styles.li}`
                      : `${styles.li}`
                  }
                  onClick={() => onUpdateActiveLink("iot")}
                >
                  <GiRadioTower style={{ marginRight: "10px" }} />
                  Internet of thing
                </li>
              </ul>
            </div>
            <div className={styles.logo}>
              <img src={Learn4} alt="learn4" className={styles.img} />
            </div>
          </div>
          <div className={styles.course_right}>
            <h2>Search Result</h2>
            <div className={styles.list_course}>
              {course.map((item) => {
                return (
                  <CourseDetail
                    title={item.title}
                    imgUrl={item.imgUrl}
                    categories={item.categories}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
