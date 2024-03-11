import "../css files/projects.scss";
import { Link } from "react-router-dom";
import NewsImage from "../../images/Nc news.png";
import TipperImage from "../../images/Tipper.png";
const Projects = () => {
  return (
    <div className="projects">
      <h2>NC news</h2>
      <Link to={"/Projects/NCNews"}>
        <img src={NewsImage} alt="Nc news homepage screenshot" />
      </Link>
      <h2>Tipper</h2>
      <Link to={"/Projects/Tipper"}>
        <img src={TipperImage} alt="Tipper homepage screenshot" />
      </Link>
    </div>
  );
};

export default Projects;
