import "./Contacto.css";
import { useState } from "react";

export default function Contacto() {
  const [inscripcion, setInscripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const limpiarInscripcion = () => setInscripcion("");
  const limpiarMensaje = () => setMensaje("");

  return (
    <main className="contacto">

      {/* FORMULARIO DE INSCRIPCIÓN */}
      <section className="form-inscripcion">
        <h2>Solicitud de Inscripción</h2>

        <label>Seleccione una opción</label>
        <select
          value={inscripcion}
          onChange={(e) => setInscripcion(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          <option value="inscripcion">Inscripción</option>
          <option value="pase">Pase</option>
          <option value="equivalencias">Equivalencias</option>
        </select>

        <div className="botones">
          <button className="btn-enviar" aria-label="Enviar solicitud de inscripción">Enviar Solicitud</button>
          <button className="btn-limpiar" onClick={limpiarInscripcion}>
            Limpiar
          </button>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="form-contacto">
        <h2>Contacto</h2>

        <label>Deje aquí su mensaje.</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="5"
          aria-label="Escribir mensaje de contacto"
        ></textarea>

        <div className="botones">
          <button className="btn-enviar" aria-label="Enviar comentario de contacto">Enviar Comentario</button>
          <button className="btn-limpiar" onClick={limpiarMensaje}>
            Limpiar
          </button>
        </div>
      </section>

    </main>
  );
}
