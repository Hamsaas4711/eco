import "./Activities.css";
function Activities() {
  const activities = [
    {
      title: "Tree Plantation Drive",
      description:
        "Planting saplings around the campus to increase green cover.",
      date: "June 2025",
    },
    {
      title: "Beach Clean-up",
      description: "Cleanup at Tannirbhavi Beach with volunteers and students.",
      date: "August 2025",
    },
    {
      title: "Recycling Workshop",
      description: "Educating students on waste segregation and upcycling.",
      date: "September 2025",
    },
  ];

  return (
    <section className="activities-section">
      <h2>Our Activities 📅</h2>
      <div className="activity-cards">
        {activities.map((act, index) => (
          <div key={index} className="activity-card">
            <h3>{act.title}</h3>
            <p>{act.description}</p>
            <span>{act.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
