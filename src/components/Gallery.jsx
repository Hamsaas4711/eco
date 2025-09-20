import "./Gallery.css";

function Gallery() {
  const images = [
    "/ECO (2).jpg",
    "/ECO.jpg",
    "/ECO (3).jpg",
    "/ECO (4).jpg",
    "/ECO (5).jpg",
    "/ECO (6).jpg",
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
