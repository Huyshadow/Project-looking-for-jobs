import React from "react";
import { BsCalendar2CheckFill } from "react-icons/bs";
const Category = ({ title, description }) => {
  return (
    <article>
      <BsCalendar2CheckFill />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};
export default Category;
