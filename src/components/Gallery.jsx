import "./Gallery.css";

function Gallery() {
  const images = [
    "/public/ECO (2).jpg",
    "/public/ECO.jpg",
    "/public/ECO (3).jpg",
    "/public/ECO (4).jpg",
    "/public/ECO (5).jpg",
    "/public/ECO (6).jpg",
  ];

  return (
    <section className="gallery-section">
      <h2>Gallery 📸</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Eco Event ${idx + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
