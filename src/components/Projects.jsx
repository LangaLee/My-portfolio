import "../css files/projects.scss";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="projects">
      <Link to={"/Projects/NCNews"}>
        {" "}
        <img src="../../images/Nc news.png" alt="Nc news homepage screenshot" />
      </Link>
      <Link to={"/Projects/Tipper"}>
        {" "}
        <img src="../../images/Tipper.png" alt="Tipper homepage screenshot" />
      </Link>
    </div>
  );
};

export default Projects;
