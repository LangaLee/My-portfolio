import { Link } from "react-router-dom";
import "../css files/homePage.scss";
import { scroll } from "react-scroll";
const HomePage = () => {
  return (
    <div>
      <section>
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
      <section className="projects">
        <h2>Projects</h2>
        <div>
          <Link to={"/Projects/NCNews"} onClick={() => scroll.scrollToTop()}>
            {" "}
            <img
              src="../../images/Nc news.png"
              alt="Nc news homepage screenshot"
            />
          </Link>
          <Link to={"/Projects/Tipper"} onClick={() => scroll.scrollToTop()}>
            {" "}
            <img
              src="../../images/Tipper.png"
              alt="Tipper homepage screenshot"
            />
          </Link>

          <Link
            className="allProjects"
            to={"/Projects"}
            onClick={() => scroll.scrollToTop()}
          >
            All Projects
          </Link>
        </div>
      </section>
      <section></section>
      <section>Tipper api</section>
      <section>Tipper</section>
    </div>
  );
};

export default HomePage;
