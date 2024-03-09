import "../css files/navbar.scss";
import { useState } from "react";
import NavigationList from "./navigationList";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);
  return (
    <div className="navBar">
      <div>
        {isOpen ? (
          <NavigationList
            setIsOpen={setIsOpen}
            scale={scaleValue}
            setScaleValue={setScaleValue}
          />
        ) : (
          <button
            className="optionsLink"
            onClick={() => {
              setIsOpen(true);
              setScaleValue(0);
            }}
          >
            <div className="options"></div>
            <div className="options"></div>
            <div className="options"></div>
          </button>
        )}
      </div>
      <div>
        <a href="https://www.linkedin.com/in/langa-dlemz/" target="_blank">
          <button>linkedin</button>
        </a>
        <a href="https://www.instagram.com/oldschool_is200/" target="_blank">
          <button>Instagram</button>
        </a>
        <a href="https://github.com/langaLee" target="_blank">
          <button>Github</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
