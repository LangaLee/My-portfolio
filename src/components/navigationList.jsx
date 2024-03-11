import "../css files/navigationList.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scroll } from "react-scroll";
import cv from "../../Langa Dlamini CV.pdf";
const variants = {
  open: {
    clipPath: "circle(1200px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 10,
    },
  },
  closed: {
    clipPath: "circle(0.1px at 0px 0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 50,
    },
  },
};

const NavigationList = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div animate={isOpen ? "open" : "closed"}>
      <motion.div className="navList" variants={variants}>
        <motion.ul className="navListItems">
          <Link
            to={"/"}
            onClick={() => {
              setIsOpen(false);
              scroll.scrollToTop();
            }}
            className="liItem"
          >
            HomePage
          </Link>
          <Link
            to={"/skills"}
            onClick={() => {
              setIsOpen(false);
            }}
            className="liItem"
          >
            Skills
          </Link>
          <a
            href={cv}
            onClick={() => {
              setIsOpen(false);
            }}
            className="liItem"
            download
          >
            Download CV
          </a>
          <motion.a className="liItem">Contact</motion.a>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default NavigationList;
