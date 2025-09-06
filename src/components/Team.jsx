import { MdGroup } from "react-icons/md";
import "./Team.css";
function Team() {
  const members = [
    // { name: 'Ravi Kumar', role: 'Faculty Coordinator' },
    // { name: 'Anjali Rao', role: 'President' },
    // { name: 'Nikhil Shenoy', role: 'Vice President' },
    // { name: 'Sneha Dsouza', role: 'Event Manager' },
  ];

  return (
    <section className="team-section">
      <h2>
        Meet the Team <MdGroup color="#4CAF50" />
      </h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-member">
            <img src={`/images/team-${i + 1}.jpg`} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
