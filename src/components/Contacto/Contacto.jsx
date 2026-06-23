import { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  // PANEL ABIERTO (solo uno a la vez)
  const [panelAbierto, setPanelAbierto] = useState(null);

  const togglePanel = (panel) => {
    setPanelAbierto(panelAbierto === panel ? null : panel);
  };

  // ============================
  // FORMULARIO INSCRIPCIÓN
  // ============================
  const [inscripcion, setInscripcion] = useState({
    nombreEstudiante: "",
    dniEstudiante: "",
    fechaNacimiento: "",
    calle: "",
    numero: "",
    turno: "",
    curso: "",
    nombreAdulto: "",
    dniAdulto: "",
    telAdulto: "",
    emailAdulto: "",
    actividadLaboral: "",
  });

  const handleInscripcion = (e) => {
    setInscripcion({ ...inscripcion, [e.target.name]: e.target.value });
  };

  const limpiarInscripcion = () =>
    setInscripcion({
      nombreEstudiante: "",
      dniEstudiante: "",
      fechaNacimiento: "",
      calle: "",
      numero: "",
      turno: "",
      curso: "",
      nombreAdulto: "",
      dniAdulto: "",
      telAdulto: "",
      emailAdulto: "",
      actividadLaboral: "",
    });

  // ============================
  // FORMULARIO CONTACTO
  // ============================
  const [contacto, setContacto] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });

  const handleContacto = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

  const limpiarContacto = () =>
    setContacto({
      nombre: "",
      telefono: "",
      mensaje: "",
    });

  return (
    <main className="contacto-main">
      <div className="contacto-contenedor">

        <h2>Inscripción y Contacto</h2>

        {/* =====================================================
            PANEL 1 — INSCRIPCIÓN
        ===================================================== */}
        <section
          className={`panel ${panelAbierto === "inscripcion" ? "abierto" : ""}`}
        >
          <button className="toggle" onClick={() => togglePanel("inscripcion")}>
            Solicitud de Inscripción
          </button>

          <div className="panel-contenido">
            <form className="form-inscripcion">

              {/* COLUMNA ESTUDIANTE */}
              <div className="columna-estudiante">
                <h3>Datos del Estudiante</h3>

                <label>Apellidos y Nombres:</label>
                <input
                  type="text"
                  name="nombreEstudiante"
                  value={inscripcion.nombreEstudiante}
                  onChange={handleInscripcion}
                  required
                />

                <label>DNI:</label>
                <input
                  type="text"
                  name="dniEstudiante"
                  value={inscripcion.dniEstudiante}
                  onChange={handleInscripcion}
                  required
                />

                <label>Fecha de Nacimiento:</label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={inscripcion.fechaNacimiento}
                  onChange={handleInscripcion}
                  required
                />

                <label>Domicilio:</label>
                <div className="domicilio-grupo">
                  <input
                    type="text"
                    name="calle"
                    placeholder="Calle"
                    value={inscripcion.calle}
                    onChange={handleInscripcion}
                    required
                  />
                  <input
                    type="text"
                    name="numero"
                    placeholder="Número"
                    value={inscripcion.numero}
                    onChange={handleInscripcion}
                    required
                  />
                </div>

                <p className="form-pregunta">Turno de preferencia</p>

                <div className="turno-grupo">
                  <label>
                    <input
                      type="radio"
                      name="turno"
                      value="mañana"
                      checked={inscripcion.turno === "mañana"}
                      onChange={handleInscripcion}
                      required
                    />
                    Mañana
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="turno"
                      value="tarde"
                      checked={inscripcion.turno === "tarde"}
                      onChange={handleInscripcion}
                    />
                    Tarde
                  </label>
                </div>

                <label>Curso al que desea inscribirse:</label>
                <select
                  name="curso"
                  value={inscripcion.curso}
                  onChange={handleInscripcion}
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option>1° Año</option>
                  <option>2° Año</option>
                  <option>3° Año</option>
                  <option>4° Año</option>
                  <option>5° Año</option>
                  <option>6° Año</option>
                </select>
              </div>

              {/* COLUMNA ADULTO RESPONSABLE */}
              <div className="columna-adulto">
                <h3>Datos del Adulto Responsable</h3>

                <label>Apellidos y Nombres:</label>
                <input
                  type="text"
                  name="nombreAdulto"
                  value={inscripcion.nombreAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label>DNI:</label>
                <input
                  type="text"
                  name="dniAdulto"
                  value={inscripcion.dniAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label>Teléfono:</label>
                <input
                  type="tel"
                  name="telAdulto"
                  value={inscripcion.telAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label>Correo electrónico:</label>
                <input
                  type="email"
                  name="emailAdulto"
                  value={inscripcion.emailAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label>Actividad Laboral:</label>
                <input
                  type="text"
                  name="actividadLaboral"
                  value={inscripcion.actividadLaboral}
                  onChange={handleInscripcion}
                  required
                />
              </div>

              <div className="botones-form">
                <button type="submit">Enviar Solicitud</button>
                <button
                  type="button"
                  className="btn-reset"
                  onClick={limpiarInscripcion}
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* =====================================================
            PANEL 2 — CONTACTO
        ===================================================== */}
        <section
          className={`panel ${panelAbierto === "contacto" ? "abierto" : ""}`}
        >
          <button className="toggle" onClick={() => togglePanel("contacto")}>
            Contacto
          </button>

          <div className="panel-contenido">
            <form className="form-contacto">

              <label>Apellido y Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={contacto.nombre}
                onChange={handleContacto}
                required
              />

              <label>Teléfono:</label>
              <input
                type="tel"
                name="telefono"
                value={contacto.telefono}
                onChange={handleContacto}
                required
              />

              <label>Mensaje o comentario:</label>
              <textarea
                rows="5"
                name="mensaje"
                placeholder="Deje aquí su mensaje..."
                value={contacto.mensaje}
                onChange={handleContacto}
                required
              ></textarea>

              <div className="botones-form">
                <button type="submit">Enviar Comentario</button>
                <button
                  type="button"
                  className="btn-reset"
                  onClick={limpiarContacto}
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}
