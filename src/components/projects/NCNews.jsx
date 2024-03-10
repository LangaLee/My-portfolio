const NCNews = () => {
  return (
    <div>
      <section className="projectSection">
        <div className="NCNewsDiv">
          <div>
            <h2>NC News</h2>
            <p>
              This is a web-app that allows users to read articles without
              making an account. If the user creates an account or logs in they
              can have access to more features such as posting an articles,
              commenting on existing articles, deleting articles that they have
              posted, liking/disliking articles and more.
            </p>
            <p>
              NC news is made using the react framework and styled using
              tailwind css. Additional packages are used such as axios and
              cryptr.
            </p>
            <p>
              The backend of this web-app consists of an API that makes calls to
              the database and the database itself. The backend is made using
              SQL as the database and for the API Express and nodejs are used.
            </p>
          </div>
          <div>
            <img
              className="projectScreenshot"
              src="../../images/Nc news.png"
              alt="Nc news homepage screenshot"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NCNews;
