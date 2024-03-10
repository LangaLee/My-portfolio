import SourceCode from "../../reusable components/sourceCode";
import TipperImage from "../../../images/Tipper.png";
const Tipper = () => {
  return (
    <section className="projectSection">
      <div>
        <div className="projectDiv">
          <div>
            <h2 className="projectTitle">Tipper</h2>
            <p>
              This is a web-app that allows service providers such as waiters to
              be tipped directly into their bank accounts and other users can
              use it to tip a specific service provider. To use this a service
              provider you need to make and account and when you login you can
              open the qr code generated for you by tipper and when someone
              scans this qr code it directs them to a payment page where they
              can tip you. So if you are a service provider all you need to do
              is scan the qr code from the service provider and you can then
              tip.
            </p>
            <SourceCode
              link="https://front-end-eight-eta-57.vercel.app/"
              value="Hosted app"
            />
            <SourceCode
              link="https://www.youtube.com/watch?v=6VhrzSx9G08"
              value="Project Demo"
            />
            <p>
              Tipper is made using nextjs framework and saas for the styling.
              Other essential packages used in the frontend are bootstrap,
              cryptr, qrcode, stripe and axios.
            </p>
            <SourceCode
              link="https://github.com/Tipper-final-project/front-end"
              value="Source code"
            />
            <p>
              The backend is built using mongodb as the database, express and
              nodejs is used for the API. Other essential packages used are
              jest, supertest, husky, dotenv and cors.
            </p>
            <SourceCode
              link="https://github.com/Tipper-final-project/Backend"
              value="Source code"
            />
          </div>
          <div>
            <img
              className="projectScreenshot"
              src={TipperImage}
              alt="Nc news homepage screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tipper;
