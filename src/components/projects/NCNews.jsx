import SourceCode from "../../reusable components/sourceCode";
import NewsImage from "../../../images/Nc news.png";
const NCNews = () => {
  return (
    <div>
      <section className="projectSection">
        <div>
          <div className="NCNewsDiv">
            <div>
              <h2>NC News</h2>
              <p>
                This is a web-app that allows users to read articles without
                making an account. If the user creates an account or logs in
                they can have access to more features such as posting an
                articles, commenting on existing articles, deleting articles
                that they have posted, liking/disliking articles and more.
              </p>
              <SourceCode
                link="https://news-for-gen-z.netlify.app/"
                value="Hosted app"
              />
              <p>
                NC news is made using the react framework and styled using
                tailwind css. Additional packages are used such as axios and
                cryptr.
              </p>
              <SourceCode
                link="https://github.com/LangaLee/fe-nc-news"
                value="Source code"
              />
              <p>
                The backend of this web-app consists of an API that makes calls
                to the database and the database itself. The backend is made
                using SQL as the database and for the API Express and nodejs are
                used.
              </p>
              <SourceCode
                link="https://github.com/LangaLee/nc-news"
                value="Source code"
              />
            </div>
            <div>
              <img
                className="projectScreenshot"
                src={NewsImage}
                alt="Nc news homepage screenshot"
              />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default NCNews;
