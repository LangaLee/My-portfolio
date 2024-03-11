import "../css files/navbar.scss";
import { useState } from "react";
import NavigationList from "./navigationList";
import { SocialIcon } from "react-social-icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {" "}
        <NavigationList isOpen={isOpen} setIsOpen={setIsOpen} />
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

        <div className="socialLinks">
          <SocialIcon
            url="https://www.linkedin.com/in/langa-dlemz/"
            target="_blank"
          />

          <SocialIcon
            url="https://www.instagram.com/oldschool_is200/"
            target="_blank"
          />

          <SocialIcon url="https://github.com/LangaLee" target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
