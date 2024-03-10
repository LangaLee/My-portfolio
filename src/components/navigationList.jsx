import "../css files/navigationList.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scroll } from "react-scroll";
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
          <motion.a className="liItem">Plans</motion.a>
          <motion.a className="liItem">Contact</motion.a>
          <motion.a className="liItem">About Me</motion.a>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default NavigationList;
