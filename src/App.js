import styles from "./App.module.css";
import Home from "./components/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Course from "./components/Courses/Course";
import Login from "./components/LoginSignin/Login";
import { AiOutlineUnorderedList, AiOutlineCloseCircle } from "react-icons/ai";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <div className={styles.nav_container}>
            <nav className={styles.navbar}>
              <Link to="/" className={styles.link}>
                <h4>HUYLEARN</h4>
              </Link>
              <ul className={styles.nav_menu}>
                <Link to="/categories" className={styles.link}>
                  Categories
                </Link>
                <Link to="/about" className={styles.link}>
                  About
                </Link>
                <Link to="/course" className={styles.link}>
                  Course
                </Link>
                <Link to="/contact" className={styles.link}>
                  Contact
                </Link>
              </ul>
              <Link to="/login" className={styles.link}>
                Login
              </Link>
              <AiOutlineUnorderedList style={{ display: "none" }} />
              <AiOutlineCloseCircle style={{ display: "none" }} />
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="course" element={<Course />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
