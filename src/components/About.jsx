import { FaTree, FaRecycle, FaHandsHelping } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>
          About KPT Eco Club <FaTree color="#388e3c" />
        </h2>
        <p>
          The KPT Eco Club is a student-driven initiative dedicated to promoting
          sustainability and environmental awareness across the Karnataka
          Polytechnic campus in Mangalore.
        </p>
        <p>
          Our mission is to encourage eco-conscious behavior through activities
          like tree planting, waste management, and awareness drives. Together,
          we aim to create a cleaner, greener future.
        </p>

        <div className="mission-values">
          <div className="mission-item">
            <FaHandsHelping color="#4CAF50" size={28} />
            <h3>Community Engagement</h3>
            <p>
              We believe that lasting change starts with community. Our club
              organizes workshops, clean-up drives, and events to bring people
              together for environmental causes.
            </p>
          </div>
          <div className="mission-item">
            <FaTree color="#388e3c" size={28} />
            <h3>Tree Plantation Drives</h3>
            <p>
              Planting trees is one of the most effective ways to combat climate
              change. We actively plant native species across the campus and
              surrounding areas.
            </p>
          </div>
          <div className="mission-item">
            <FaRecycle color="#66BB6A" size={28} />
            <h3>Waste Management</h3>
            <p>
              Promoting recycling and reducing waste is central to our efforts.
              We work to improve waste segregation awareness and encourage
              reuse.
            </p>
          </div>
        </div>

        <p className="closing-statement">
          Join us in our journey to make KPT a beacon of environmental
          responsibility. Every small step counts — together, we can make a big
          difference.
        </p>
      </div>
    </section>
  );
}

export default About;
