import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página institucional">
      <p>© {new Date().getFullYear()} E.E.S. N° 59 - Todos los derechos reservados.</p>
      <p>Desarrollado por <strong>Elías Daniel Díaz</strong></p>
    </footer>
  );
}
