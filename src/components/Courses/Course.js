import React from "react";
import styles from "../../css/Course.module.css";
import { BsSearch } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineGraphicEq } from "react-icons/md";
import { GiMagnetMan } from "react-icons/gi";
import { MdWeb } from "react-icons/md";
import { BiData } from "react-icons/bi";
import { GiRadioTower } from "react-icons/gi";

const Course = () => {
  const handleChange = () => {};
  function onClickCheck() {}
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
                <li onClick={onClickCheck}>
                  <SiHiveBlockchain style={{ marginRight: "10px" }} />
                  Blockchain
                </li>
                <li onClick={onClickCheck}>
                  <MdOutlineGraphicEq style={{ marginRight: "10px" }} />
                  Graphic Design
                </li>
                <li onClick={onClickCheck}>
                  <GiMagnetMan style={{ marginRight: "10px" }} />
                  Ai Development
                </li>
                <li onClick={onClickCheck}>
                  <MdWeb style={{ marginRight: "10px" }} />
                  Web Development
                </li>
                <li onClick={onClickCheck}>
                  <BiData style={{ marginRight: "10px" }} />
                  Data Analysist
                </li>
                <li onClick={onClickCheck}>
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
