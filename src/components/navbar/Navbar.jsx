import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          {/* <a href="#">
            <img src="/facebook.png" alt="" />
          </a> */}
          {/* <a href="https://www.instagram.com/ghadialiwebdevelopers.in/?next=%2F" target="block">
            <img src="/instagram.png" alt="Instagram ID" />
          </a>
          <a href="https://www.youtube.com/channel/UCAPcU3UqwCM9Fo2n8qGlWtQ" target="block">
            <img src="/youtube.png" alt="Youtube Channel" />
          </a> */}
          {/* <a href="#">
            <img src="/dribbble.png" alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
