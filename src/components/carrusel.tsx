import { useState } from "react";
import "./carrusel.css";

export default function Carrusel() {
  const images: string[] = [
    "/images/banerBarber4.png",
    "/images/banerBarber3.png",
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="inicio"className="carrusel">
      <div className="carrusel-container">
        <img src={images[current]} alt={`Local ${current + 1}`} />
        <button className="prev" onClick={prevSlide}>‹</button>
        <button className="next" onClick={nextSlide}>›</button>
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
