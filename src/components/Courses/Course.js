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

const Course = () => {
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

            <div className={styles.categories}>
              <ul>
                <li
                  className={activelink === "bl" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("bl")}
                >
                  <SiHiveBlockchain style={{ marginRight: "10px" }} />
                  Blockchain
                </li>
                <li
                  className={activelink === "gd" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("gd")}
                >
                  <MdOutlineGraphicEq style={{ marginRight: "10px" }} />
                  Graphic Design
                </li>
                <li
                  className={activelink === "ai" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("ai")}
                >
                  <GiMagnetMan style={{ marginRight: "10px" }} />
                  Ai Development
                </li>
                <li
                  className={activelink === "wd" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("wd")}
                >
                  <MdWeb style={{ marginRight: "10px" }} />
                  Web Development
                </li>
                <li
                  className={activelink === "dt" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("dt")}
                >
                  <BiData style={{ marginRight: "10px" }} />
                  Data Analysist
                </li>
                <li
                  className={activelink === "iot" ? styles.active : ``}
                  onClick={() => onUpdateActiveLink("iot")}
                >
                  <GiRadioTower style={{ marginRight: "10px" }} />
                  Internet of thing
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.course_right}>
            <h2>Search Result</h2>
            <p>...</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
