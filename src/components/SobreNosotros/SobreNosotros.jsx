import "./SobreNosotros.css";

export default function SobreNosotros() {
  return (
    <main className="sobreNosotros">
      <section className="sobreNosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>
          Una comunidad educativa comprometida con el aprendizaje y el futuro.
        </p>
      </section>

      <section className="sobreNosotros-cards">
        <div className="card-sobreNosotros">
          <div className="icono-premium">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2>Quiénes Somos</h2>
          <p>
            Somos una institución pública de Morón dedicada a la formación
            integral de jóvenes con orientación en Ciencias Naturales.
          </p>
        </div>

        <div className="card-sobreNosotros">
          <div className="icono-premium">
            <svg viewBox="0 0 24 24">
              <path d="M6 2h4v2H6zM8 4v6" />
              <circle cx="14" cy="10" r="3" />
              <path d="M4 20h16M12 13v7" />
            </svg>
          </div>
          <h2>Nuestro Enfoque</h2>
          <p>
            Promovemos el pensamiento crítico, la experimentación y el
            aprendizaje basado en proyectos reales.
          </p>
        </div>

        <div className="card-sobreNosotros">
          <div className="icono-premium">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C7 7 4 11 4 15a8 8 0 0016 0c0-4-3-8-8-13z" />
            </svg>
          </div>
          <h2>Valores</h2>
          <p>
            Fomentamos el respeto, la solidaridad, la responsabilidad y el
            compromiso con el medio ambiente.
          </p>
        </div>

        <div className="card-sobreNosotros">
          <div className="icono-premium">
            <svg viewBox="0 0 24 24">
              <circle cx="7" cy="8" r="3" />
              <circle cx="17" cy="8" r="3" />
              <path d="M2 20c0-4 3-6 5-6s5 2 5 6" />
              <path d="M12 20c0-4 3-6 5-6s5 2 5 6" />
            </svg>
          </div>
          <h2>Comunidad</h2>
          <p>
            Trabajamos junto a familias, docentes y estudiantes para construir
            un entorno educativo inclusivo y participativo.
          </p>
        </div>
      </section>
    </main>
  );
}
