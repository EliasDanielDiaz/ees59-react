import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
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
