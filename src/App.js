import styles from "./App.module.css";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Categories from "./components/Categories/Categories";
import Course from "./components/Courses/Course";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Login from "./components/LoginSignin/Login";
import { AiOutlineUnorderedList, AiOutlineCloseCircle } from "react-icons/ai";
import useWindowDimensions from "./components/useWindowsDimension/useWindowDimension";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [list, SetList] = useState(true);
  const { height, width } = useWindowDimensions();

  const dropDown = () => {
    if (list === false) {
      SetList(true);
    } else {
      SetList(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if (width > 900) SetList(true);
    else SetList(false);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [width]);
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <div
            className={
              scrolled
                ? `${styles.nav_container} ${styles.scroll}`
                : styles.nav_container
            }
          >
            <nav className={styles.navbar}>
              <Link to="/" className={styles.link}>
                <h4>
                  <span className={styles.logo}>HUY</span>LEARN
                </h4>
              </Link>
              {list && (
                <ul className={styles.nav_menu}>
                  <Link to="/categories" className={styles.link}>
                    <p>Categories</p>
                  </Link>
                  <Link to="/about" className={styles.link}>
                    <p>About</p>
                  </Link>
                  <Link to="/course" className={styles.link}>
                    <p>Course</p>
                  </Link>
                  <Link to="/feedback" className={styles.link}>
                    <p>Feedback</p>
                  </Link>
                  {width <= 900 && (
                    <Link to="/login" className={`${styles.link}`}>
                      <p>Login</p>
                    </Link>
                  )}
                </ul>
              )}
              <Link to="/login" className={`${styles.link} ${styles.login}`}>
                Login
              </Link>
              {!list && (
                <AiOutlineUnorderedList
                  onClick={() => dropDown()}
                  className={styles.icon}
                />
              )}
              {list && (
                <AiOutlineCloseCircle
                  onClick={() => dropDown()}
                  className={styles.icon}
                />
              )}
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
