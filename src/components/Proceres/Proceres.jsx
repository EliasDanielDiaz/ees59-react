import { useState } from "react";
import { proceres } from "../../data/proceresData";
import "./Proceres.css";

export default function Proceres() {
  const [panelAbierto, setPanelAbierto] = useState(false);
  const [procerSeleccionado, setProcerSeleccionado] = useState(null);

  const abrirPanel = (procer) => {
    setProcerSeleccionado(procer);
    setPanelAbierto(true);
  };

  const cerrarPanel = () => {
    setPanelAbierto(false);
  };

  return (
    <>
      {/* OVERLAY */}
      {panelAbierto && (
        <div className="proceres-overlay" onClick={cerrarPanel}></div>
      )}

      {/* PANEL */}
      {panelAbierto && (
        <div className="panel-proceres activo">
          <button className="panel-cerrar" onClick={cerrarPanel}>Cerrar</button>

          <h2 className="panel-nombre">{procerSeleccionado.nombre}</h2>
          <img
            src={procerSeleccionado.imagen}
            alt={procerSeleccionado.nombre}
            className="panel-img"
          />

          <div
            className="panel-resena"
            dangerouslySetInnerHTML={{ __html: procerSeleccionado.texto }}
          ></div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="proceres-main">
        <section className="proceres-hero">
          <h1 className="titulo-proceres">Próceres Argentinos</h1>
          <p>Los Padres De La Patria</p>
        </section>

        {/* GRID */}
        <section className="proceres-grid">
          {proceres.map((p) => (
            <article key={p.id} className="procer-card">
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>

              <button
                className="boton-resena"
                onClick={() => abrirPanel(p)}
              >
                Ver reseña
              </button>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
