import { useState, useEffect } from "react";
import "./Home.css";

import img1 from "../../assets/homeImagenes/01edificio.jpg";
import img2 from "../../assets/homeImagenes/02laboratorio.jpg";
import img3 from "../../assets/homeImagenes/03alumnos.jpg";

export default function Home() {
  const imagenes = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const titulos = [
  "E.E.S. N° 59",
  "Clases Prácticas",
  "Compromiso con el Medio Ambiente"
];

const subtitulos = [
  "Formando el futuro con Ciencias Naturales",
  "Experimentación y pensamiento científico",
  "Educación integral y consciente"
];


  return (
    <main className="home">
      <section className="carrusel">
        <button className="btn-carrusel izq" onClick={anterior}>
          ‹
        </button>

        <div className="slide-contenedor">
          <img
            src={imagenes[index]}
            alt="Imagen del carrusel"
            className="carrusel-img"
          />

          <div className="slide-texto">
            <h2>{titulos[index]}</h2>
            <p>{subtitulos[index]}</p>
          </div>
        </div> 

        <button className="btn-carrusel der" onClick={siguiente}>
          ›
        </button>

        <div className="dots">
          {imagenes.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </section>

      {/* TEXTO INSTITUCIONAL DEL TP1 */}
      <section className="info-home">
        <div className="card-blanca">
          <h1>Bienvenidos a nuestra escuela</h1>

          <p>
            En Morón formamos jóvenes curiosos y críticos con una sólida
            orientación en Ciencias Naturales.
          </p>

          <p>
            A través de clases prácticas y experimentales en biología, química,
            física y ciencias de la Tierra, desarrollamos el pensamiento
            científico, la investigación y el compromiso con el medio ambiente.
          </p>

          <p>
            Combinamos excelencia académica con valores, arte y deporte para
            preparar a nuestros estudiantes para el futuro.
          </p>

          <p className="invitacion">
            <strong>
              Te invitamos a ser parte de nuestra comunidad educativa.
            </strong>
          </p>
        </div>
      </section>

      <section className="ubicacion">
        <h2>Ubicación</h2>
        <p>Evaristo Iglesias 3570, Castelar, Morón, Buenos Aires.</p><br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.883903125005!2d-58.66361288809142!3d-34.68287947281316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc0c4244c9f4b%3A0xaa5b99f57b6ad568!2sEvaristo%20Iglesias%203570%2C%20B1712FMB%20Castelar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1781227832133!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
