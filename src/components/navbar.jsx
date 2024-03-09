import "../css files/navbar.scss";
import { useState } from "react";
import NavigationList from "./navigationList";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {" "}
        <NavigationList isOpen={isOpen} />{" "}
      </div>
      <div className="navBar">
        <div>
          <button
            className="optionsLink"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          >
            {isOpen ? (
              <p className="closeNavList">X</p>
            ) : (
              <>
                <div className="options"></div>
                <div className="options"></div>
                <div className="options"></div>
              </>
            )}
          </button>
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
    </div>
  );
};

export default Navbar;
