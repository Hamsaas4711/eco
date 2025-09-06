import { FaEnvelope } from "react-icons/fa";
import "./Contact.css";
function Contact() {
  return (
    <section className="contact-section">
      <h2>
        Contact Us <FaEnvelope color="#a46a0f" />
      </h2>
      <p>
        Email: <a href="mailto:example@gmail.com">example@gmail.com</a>
      </p>
      <p>
        Instagram:{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          @example
        </a>
      </p>
      <p>
        Feedback Form: <a href="https://forms.gle">Click Here</a>
      </p>
    </section>
  );
}

export default Contact;
