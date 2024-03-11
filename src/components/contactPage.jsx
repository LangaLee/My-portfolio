import "../css files/contactPage.scss";
import Contact from "./contact";

const ContactPage = () => {
  return (
    <section className="contactSection">
      <div>
        <h2>Contact Me</h2>
        <p>Phone Number: 07912 066 223</p>
        <p>Email: langa4749@gmail.com</p>
        <p className="sendMessage">Or send me a message below</p>
        <Contact />
      </div>
    </section>
  );
};

export default ContactPage;
