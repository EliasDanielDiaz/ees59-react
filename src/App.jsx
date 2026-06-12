import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Cursos from "./components/Cursos/Cursos";
import Canciones from "./components/Canciones/Canciones";
import Proceres from "./components/Proceres/Proceres";
import Contacto from "./components/Contacto/Contacto";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/proceres" element={<Proceres />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </Router>
  );
}
