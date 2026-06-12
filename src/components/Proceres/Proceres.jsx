import { useState } from "react";
import { proceres } from "../../data/proceresData";
import "./Proceres.css";

export default function Proceres() {
  const [procerActivo, setProcerActivo] = useState(null);

  return (
    <main className="proceres">

      <h2>Próceres Argentinos</h2>

      {/* GRID DE CARDS */}
      <section className="proceres-grid">
        {proceres.map((p) => (
          <div key={p.id} className="procer-card">
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <button onClick={() => setProcerActivo(p)}>Ver más</button>
          </div>
        ))}
      </section>

      {/* PANEL LATERAL */}
      {procerActivo && (
        <>
          <div className="overlay" onClick={() => setProcerActivo(null)}></div>

          <aside className="panel">
            <button className="cerrar" onClick={() => setProcerActivo(null)}>
              ✕
            </button>

            <img src={procerActivo.imagen} alt={procerActivo.nombre} />
            <h3>{procerActivo.nombre}</h3>
            <p>{procerActivo.texto}</p>
          </aside>
        </>
      )}

    </main>
  );
}
