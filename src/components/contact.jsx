import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [details, setDetails] = useState(null);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    });
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t26kb1p", "template_0b3v34g", form.current, {
        publicKey: "NkLTkWW7sYmVSZIOi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.dir();
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactDiv">
      <div></div>
      <div>
        {" "}
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            required={true}
            autoComplete="off"
            name="user_name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required={true}
            name="user_contact"
            autoComplete="off"
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="messageInput"
            type="text"
            name="message"
            id="message"
            required={true}
            autoComplete="off"
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
