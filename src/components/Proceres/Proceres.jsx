import { useState } from "react";
import { proceres } from "../../data/proceresData";
import "./Proceres.css";

export default function Proceres() {
  const [procerActivo, setProcerActivo] = useState(null);

  console.log(proceres.length);

  return (
    <main className="proceres-main">

      <h2 className="titulo-proceres">Próceres Argentinos</h2>

      {/* GRID */}
      <section className="proceres-grid">
        {proceres.map((p) => (
          <article key={p.id} className="procer" data-procer={p.id}>
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <button className="btn-info" onClick={() => setProcerActivo(p)}>
              Ver reseña
            </button>
          </article>
        ))}
      </section>

      {/* PANEL FLOTANTE */}
      <div className={`panel-flotante ${procerActivo ? "activo" : ""}`}>
        {procerActivo && (
          <div className="panel-contenido">

            <div className="panel-izquierda">
              <img src={procerActivo.imagen} alt={procerActivo.nombre} />
              <h3>{procerActivo.nombre}</h3>

              <button
                className="btn-info"
                onClick={() => setProcerActivo(null)}
              >
                Ocultar reseña
              </button>
            </div>

            <div
              className="panel-derecha"
              dangerouslySetInnerHTML={{ __html: procerActivo.texto }}
            ></div>

          </div>
        )}
      </div>

    </main>
  );
}
