import { useState, useEffect } from "react";

const Carrousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageArray = [];
    for (let i = 0; i < 100; i++) {
      const imageObject = {
        src: `https://picsum.photos/800/600?random=${i}`,
        alt: `Imagen ${i}`,
      };
      imageArray.push(imageObject);
    }
    setImages([...imageArray, ...imageArray]); // Duplicar el array de imágenes
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const INTERVAL_TIME = 3000; // Intervalo de tiempo en milisegundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % (images.length / 2)); // Avanzar en el primer medio del array
  };

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length / 2) % (images.length / 2)
    ); // Retroceder en el primer medio del array
  };

  return (
    <div className="carousel relative">
      <div className="flex">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-1/5 h-auto carousel-item"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2  border-radius: 0.25rem hover:underline rounded-full"
        onClick={prev}
        aria-label="Prev"
        style={{ backgroundColor: "rgb(226 232 240)" }}
      >
        <svg
          className="h-5 w-5 text-white svg-prev"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="11 17 6 12 11 7" />
          <polyline points="18 17 13 12 18 7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 border-radius: 0.25rem hover:underline rounded-full"
        onClick={next}
        aria-label="Next"
        style={{ backgroundColor: "rgb(226 232 240)" }}
      >
        <svg
          className="h-5 w-5 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carrousel;
