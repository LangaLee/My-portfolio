import "../css files/navigationList.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 10,
    },
  },
  closed: {
    clipPath: "circle(0px at 0px 0px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

const NavigationList = ({ isOpen }) => {
  console.log(isOpen, variants);
  return (
    <motion.div animate={isOpen ? "open" : "closed"}>
      <motion.div className="navList" variants={variants}>
        <motion.ul className="navListItems">
          <motion.a className="liItem">HomePage</motion.a>
          <motion.a className="liItem">Plans</motion.a>
          <motion.a className="liItem">Contact</motion.a>
          <motion.a className="liItem">About Me</motion.a>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default NavigationList;
