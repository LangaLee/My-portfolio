import "../css files/navigationList.scss";
import { motion } from "framer-motion";

const NavigationList = ({ setIsOpen, scaleValue, setScaleValue }) => {
  return (
    <motion.div>
      <button
        className="closeNavList"
        onClick={() => {
          setIsOpen(false);
          setScaleValue(0);
        }}
      >
        X
      </button>
    </motion.div>
  );
};

export default NavigationList;
