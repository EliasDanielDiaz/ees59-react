import { useState } from "react";
import "./Cursos.css";
import cursos from "../../Data/cursos"; // ← BASE DE DATOS REAL

export default function Cursos() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  // MAPEO ENTRE NOMBRE VISIBLE Y CLAVE REAL DEL OBJETO
  const mapaClaves = {
    "AFTE": "AFTE",
    "1° A": "1_A",
    "1° B": "1_B",
    "2° A": "2_A",
    "2° B": "2_B",
    "3° A": "3_A",
    "3° B": "3_B",
    "4° 1a": "4_1a",
    "5° 1a": "5_1a",
    "6° 1a": "6_1a",
    "1° C": "1_C",
    "2° C": "2_C",
    "3° C": "3_C",
    "4° 2a": "4_2a",
    "5° 2a": "5_2a",
    "6° 2a": "6_2a",
  };

  // LISTA DE BOTONES (NO LA BASE DE DATOS)
  const listaCursos = [
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

  const cursosManana = listaCursos.slice(0, 10);
  const cursosTarde = listaCursos.slice(10);

  return (
    <main className="cursos">
      <div className="cursos-contenido">
        <h2 className="turno-titulo">Cursos y Materias</h2>

        <div className="turnos-container">
          {/* TURNO MAÑANA */}
          <div className="turno-col">
            <h3 className="turno-subtitulo">Turno Mañana</h3>
            <section className="cursos-grid manana">
              {cursosManana.map((curso, index) => (
                <button
                  key={index}
                  className="curso-btn"
                  onClick={() => setCursoSeleccionado(curso)}
                >
                  {curso}
                </button>
              ))}
            </section>
          </div>

          {/* TURNO TARDE */}
          <div className="turno-col">
            <h3 className="turno-subtitulo">Turno Tarde</h3>
            <section className="cursos-grid tarde">
              {cursosTarde.map((curso, index) => (
                <button
                  key={index}
                  className="curso-btn"
                  onClick={() => setCursoSeleccionado(curso)}
                >
                  {curso}
                </button>
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* PANEL ULTRA+ */}
      {cursoSeleccionado && (
        <>
          <div
            className="panel-overlay"
            onClick={() => setCursoSeleccionado(null)}
          ></div>

          <div className="panel-cursos">
            <button
              className="panel-cerrar"
              onClick={() => setCursoSeleccionado(null)}
            >
              Cerrar
            </button>

            <h3 className="panel-titulo">{cursoSeleccionado}</h3>

            {/* MATERIAS */}
            <h4 className="panel-subtitulo">Materias y Profesores</h4>
            <ul className="panel-lista">
              {cursos[mapaClaves[cursoSeleccionado]]?.materias?.map((m, i) => (
                <li key={i}>
                  <strong>{m[0]}</strong> — {m[1]}
                </li>
              ))}
            </ul>

            {/* HORARIOS */}
            <h4 className="panel-subtitulo">Horarios</h4>
            <div className="panel-tabla">
              <table>
                <thead>
                  <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                  </tr>
                </thead>

                <tbody>
                  {cursos[mapaClaves[cursoSeleccionado]]?.horarios?.map(
                    (fila, i) => (
                      <tr key={i}>
                        {fila.map((col, j) => (
                          <td key={j}>{col}</td>
                        ))}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
