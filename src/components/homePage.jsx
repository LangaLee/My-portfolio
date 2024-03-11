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
            I am a passionate Junior Software Developer seeking an opportunity
            to join the tech world. Problem solving is a skill I have always
            valued, and software development provides diverse avenues to apply
            it. Coding is not just a solution to problem solving but a powerful
            tool to enhance daily lives when applied correctly. Determination
            drives me to relentlessly pursue solutions until I find the most
            effective approach to a problem. One of the many beauties of
            software development is that there is usually more than 1 language
            to use in designing specific software and in those languages there
            are more than a few avenues to approach the problem.
          </p>
          <p>
            Continuous learning is very crucial as software developers as you
            can never fully master a language and there are always improvements
            that can be made in our code. Currently I mainly write code in
            JavaScript but I am expanding my knowledge with C# as I have always
            loved video games and I would love the ability contribute to their
            production. Video game development is an example of how much freedom
            software development gives us and with great creativity we can make
            great software.
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

            <div>
              <Link
                className="allProjects"
                to={"/Projects"}
                onClick={() => scroll.scrollToTop()}
              >
                All Projects
              </Link>
            </div>
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
