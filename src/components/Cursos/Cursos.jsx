import "./Cursos.css";

export default function Cursos() {
  const cursos = [
    "AFTE",
    "1° A",
    "1° B",
    "2° A",
    "2° B",
    "3° A",
    "3° B",
    "4° 1a",
    "5° 1a",
    "6° 1a",
    "1° C",
    "2° C",
    "3° C",
    "4° 2a",
    "5° 2a",
    "6° 2a",
  ];

  return (
    <main className="cursos">
      <h2>Cursos y Materias</h2>

      <section className="cursos-grid">
        {cursos.map((curso, index) => (
          <button
            key={index}
            className="curso-btn"
            aria-label={`Ver materias de ${curso}`}
          >
            {curso}
          </button>
        ))}
      </section>
    </main>
  );
}
