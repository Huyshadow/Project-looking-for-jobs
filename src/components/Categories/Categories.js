import React from "react";
import styles from "../../css/Categories.module.css";
import Category from "./Category";
import { useNavigate } from "react-router";
import Learn3 from "../../public/learn3.svg";

const Categories = () => {
  const navigate = useNavigate();
  function navigateToAbout() {
    navigate("/about");
  }
  const list = [
    {
      title: "Block Chain",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
    {
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
    {
      title: "AI Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
    {
      title: "Data Analysist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
    {
      title: "Internet of Thing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed mauris id eros viverra fringilla.",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div className={styles.categories}>
          <div className={styles.cate_left}>
            <h1>Categories</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              mauris id eros viverra fringilla. Cras eget tempus dolor. Ut
              ultrices in ex sit amet aliquet.
            </p>
            <button className={styles.btn} onClick={navigateToAbout}>
              Learn More
            </button>
            <div className={styles.logo}>
              <img src={Learn3} className={styles.img} alt="learn3" />
            </div>
          </div>
          <div className={styles.cate_right}>
            {list.map((ex) => {
              return <Category title={ex.title} description={ex.description} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
