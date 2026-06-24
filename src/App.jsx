import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Cursos from "./components/Cursos/Cursos";
import Canciones from "./components/Canciones/Canciones";
import Proceres from "./components/Proceres/Proceres";
import Contacto from "./components/Contacto/Contacto";

// Importamos las imágenes del carrusel
import img1 from "./assets/homeImagenes/01edificio.jpg";
import img2 from "./assets/homeImagenes/02laboratorio.jpg";
import img3 from "./assets/homeImagenes/03alumnos.jpg";

export default function App() {
  const imagenes = [img1, img2, img3];

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
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              imagenes={imagenes}
              titulos={titulos}
              subtitulos={subtitulos}
            />
          }
        />

        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/proceres" element={<Proceres />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </Router>
  );
}
