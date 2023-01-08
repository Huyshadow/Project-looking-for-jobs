import React from "react";
import styles from "../../css/Categories.module.css";
import Category from "./Category";

const Categories = () => {
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
