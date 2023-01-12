import React from "react";
import { useState } from "react";
import styles from "../../css/Feedback.module.css";
import Feedbackimg from "../../public/feedback.svg";
import { MdOutlineTopic, MdOutlineDescription } from "react-icons/md";
const Feedback = () => {
  const formInitialDetails = {
    topic: "",
    description: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {};

  return (
    <>
      <section className={styles.container}>
        <div className={styles.feedback}>
          <div className={styles.feed_left}>
            <img
              src={Feedbackimg}
              className={styles.logo}
              alt={Math.random()}
            />
            <h3>
              If you have any concerns? Just talk to us! We're always here for
              you
            </h3>
          </div>
          <div className={styles.feed_right}>
            <form onSubmit={handleSubmit}>
              <h2> Feedback </h2>
              <div className={styles.input_field}>
                <MdOutlineTopic className={styles.icon} />
                <input
                  type="text"
                  placeholder="Topic"
                  name="text"
                  id="text"
                  onChange={(e) => onFormUpdate("topic", e.target.value)}
                />
              </div>
              <div className={styles.inputtext_field}>
                <textarea
                  type="text"
                  placeholder="Descripion"
                  name="text"
                  id="text"
                  onChange={(e) => onFormUpdate("topic", e.target.value)}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feedback;
