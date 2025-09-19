import "./Gallery.css";

function Gallery() {
  const images = [
    "/eco-2.jpg",
    "/eco.jpg",
    "/eco-3.jpg",
    "/eco-4.jpg",
    "/eco-5.jpg",
    "/eco-6.jpg",
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
