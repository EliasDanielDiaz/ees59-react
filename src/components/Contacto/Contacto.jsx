import { useState } from "react";
import "./Contacto.css";

// ============================
// OBJETOS INICIALES
// ============================
const inscripcionInicial = {
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
};

const contactoInicial = {
  nombre: "",
  telefono: "",
  mensaje: "",
};

export default function Contacto() {
  // PANEL ABIERTO
  const [panelAbierto, setPanelAbierto] = useState(null);
  const togglePanel = (panel) =>
    setPanelAbierto(panelAbierto === panel ? null : panel);

  // FORMULARIO INSCRIPCIÓN
  const [inscripcion, setInscripcion] = useState(inscripcionInicial);
  const handleInscripcion = (e) =>
    setInscripcion({ ...inscripcion, [e.target.name]: e.target.value });
  const limpiarInscripcion = () => setInscripcion(inscripcionInicial);

  // FORMULARIO CONTACTO
  const [contacto, setContacto] = useState(contactoInicial);
  const handleContacto = (e) =>
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  const limpiarContacto = () => setContacto(contactoInicial);

  // SUBMIT INSCRIPCIÓN
  const handleSubmitInscripcion = (e) => {
    e.preventDefault();
    console.log("Solicitud de inscripción enviada:", inscripcion);
    limpiarInscripcion();
  };

  // SUBMIT CONTACTO
  const handleSubmitContacto = (e) => {
    e.preventDefault();
    console.log("Mensaje de contacto enviado:", contacto);
    limpiarContacto();
  };

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
            <form
              className="form-inscripcion"
              onSubmit={handleSubmitInscripcion}
            >
              {/* COLUMNA ESTUDIANTE */}
              <div className="columna-estudiante">
                <h3>Datos del Estudiante</h3>

                <label htmlFor="nombreEstudiante">Apellidos y Nombres:</label>
                <input
                  id="nombreEstudiante"
                  type="text"
                  name="nombreEstudiante"
                  value={inscripcion.nombreEstudiante}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="dniEstudiante">DNI:</label>
                <input
                  id="dniEstudiante"
                  type="text"
                  name="dniEstudiante"
                  value={inscripcion.dniEstudiante}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input
                  id="fechaNacimiento"
                  type="date"
                  name="fechaNacimiento"
                  value={inscripcion.fechaNacimiento}
                  onChange={handleInscripcion}
                  required
                />

                <label className="label-grupo">Domicilio:</label>
                <div className="domicilio-grupo">
                  <input
                    id="calleDomicilio"
                    type="text"
                    name="calle"
                    placeholder="Calle"
                    value={inscripcion.calle}
                    onChange={handleInscripcion}
                    required
                  />
                  <input
                    id="numeroDomicilio"
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
                  <label htmlFor="turnoManiana">
                    <input
                      id="turnoManiana"
                      type="radio"
                      name="turno"
                      value="mañana"
                      checked={inscripcion.turno === "mañana"}
                      onChange={handleInscripcion}
                      required
                    />
                    Mañana
                  </label>

                  <label htmlFor="turnoTarde">
                    <input
                      id="turnoTarde"
                      type="radio"
                      name="turno"
                      value="tarde"
                      checked={inscripcion.turno === "tarde"}
                      onChange={handleInscripcion}
                    />
                    Tarde
                  </label>
                </div>

                <label htmlFor="cursoInscripcion">
                  Curso al que desea inscribirse:
                </label>
                <select
                  id="cursoInscripcion"
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

                <label htmlFor="nombreAdulto">Apellidos y Nombres:</label>
                <input
                  id="nombreAdulto"
                  type="text"
                  name="nombreAdulto"
                  value={inscripcion.nombreAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="dniAdulto">DNI:</label>
                <input
                  id="dniAdulto"
                  type="text"
                  name="dniAdulto"
                  value={inscripcion.dniAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="telAdulto">Teléfono:</label>
                <input
                  id="telAdulto"
                  type="tel"
                  name="telAdulto"
                  value={inscripcion.telAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="emailAdulto">Correo electrónico:</label>
                <input
                  id="emailAdulto"
                  type="email"
                  name="emailAdulto"
                  value={inscripcion.emailAdulto}
                  onChange={handleInscripcion}
                  required
                />

                <label htmlFor="actividadLaboral">Actividad Laboral:</label>
                <input
                  id="actividadLaboral"
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
            <form className="form-contacto" onSubmit={handleSubmitContacto}>
              <label htmlFor="nombreContacto">Apellido y Nombre:</label>
              <input
                id="nombreContacto"
                type="text"
                name="nombre"
                value={contacto.nombre}
                onChange={handleContacto}
                required
              />

              <label htmlFor="telefonoContacto">Teléfono:</label>
              <input
                id="telefonoContacto"
                type="tel"
                name="telefono"
                value={contacto.telefono}
                onChange={handleContacto}
                required
              />

              <label htmlFor="mensaje">Mensaje o comentario:</label>
              <textarea
                id="mensaje"
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
