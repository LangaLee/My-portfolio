import { Link } from "react-router-dom";
import "../css files/homePage.scss";
import NewsImage from "../../images/Nc news.png";
import TipperImage from "../../images/Tipper.png";
import Contact from "./contact";

const HomePage = () => {
  return (
    <div>
      <section className="introSection">
        <div className="introDiv">
          <h1>Langa Dlamini</h1>
          <h2>Junior Software Developer</h2>
          <p>
            I am a passionate Junior Software Developer looking for a role in
            the tech industry. Problem solving is a skill I have always valued,
            and software development provides diverse avenues to apply it.
            Coding is not just a solution to problem solving but a power to
            enhance our daily lives when applied correctly. Determination drives
            to relentlessly pursue solutions until I find the most effective
            approach to a problem.
          </p>
        </div>
      </section>
      <section className="projectSection">
        <div>
          <h2>Projects</h2>
          <div>
            <Link to={"/Projects/NCNews"}>
              {" "}
              <img src={NewsImage} alt="Nc news homepage screenshot" />
            </Link>
            <Link to={"/Projects/Tipper"}>
              {" "}
              <img src={TipperImage} alt="Tipper homepage screenshot" />
            </Link>

            <Link
              className="allProjects"
              to={"/Projects"}
              onClick={() => scroll.scrollToTop()}
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>
      <section className="contactSection">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
