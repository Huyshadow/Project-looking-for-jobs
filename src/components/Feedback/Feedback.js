import React from "react";
import { useState } from "react";
import styles from "../../css/Feedback.module.css";
import Feedbackimg from "../../public/feedback.svg";
import { MdOutlineTopic, MdOutlineDescription } from "react-icons/md";
import { Animated } from "react-animated-css";
const Feedback = () => {
  const formInitialDetails = {
    topic: "",
    description: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

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
          </div>
          <div className={styles.feed_right}>
            <form onSubmit={handleSubmit}>
              <h2> Feedback </h2>
              <div className={styles.input_field}>
                <MdOutlineTopic
                  style={{
                    width: "100%",
                    marginTop: "20%",
                    height: "50%",
                    textAlign: "center",
                    color: "#acacac",
                  }}
                />
                <input
                  type="text"
                  placeholder="Topic"
                  name="text"
                  id="text"
                  onChange={(e) => onFormUpdate("topic", e.target.value)}
                />
              </div>
              <div className={styles.input_field}>
                <MdOutlineDescription
                  style={{
                    width: "100%",
                    marginTop: "20%",
                    height: "50%",
                    textAlign: "center",
                    color: "#acacac",
                  }}
                />
                <textarea
                  type="text"
                  placeholder="Topic"
                  name="text"
                  id="text"
                  onChange={(e) => onFormUpdate("topic", e.target.value)}
                />
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feedback;
