import { FaLeaf } from "react-icons/fa";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          KPT Eco Club <FaLeaf color="#66BB6A" />
        </h1>
        <p>
          Join us in making Karnataka Polytechnic greener and cleaner! Together,
          we plant trees, manage waste, and spread environmental awareness.
        </p>
        <p>
          Be a part of exciting eco-friendly events, workshops, and community
          drives. Your small actions can create a big impact!
        </p>
        <a href="/about" className="hero-btn">
          Learn More
        </a>
        <a
          href="/contact"
          className="hero-btn"
          style={{ marginLeft: "15px", backgroundColor: "#4caf50" }}
        >
          Join Us
        </a>
        <p
          style={{
            marginTop: "1.5rem",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "#a5d6a7",
          }}
        >
          “Together we can grow a sustainable future.”
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
