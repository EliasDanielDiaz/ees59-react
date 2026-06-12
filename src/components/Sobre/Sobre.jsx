import "./Sobre.css";

export default function Sobre() {
  return (
    <main className="sobre">

      <section className="sobre-nosotros" aria-label="Información institucional">
        <h2>Sobre Nosotros</h2>

        <div className="sn-contenedor">

          <div className="sn-texto">
            <p>
              La Escuela de Educación Secundaria N.º 59 es una institución pública
              comprometida con la formación integral de adolescentes y jóvenes de
              nuestra comunidad.
            </p>

            <p>
              Promovemos un ambiente de respeto, participación y acompañamiento,
              donde cada estudiante pueda desarrollarse en lo académico, lo social
              y lo personal.
            </p>

            <p>
              Nuestro equipo docente y directivo sostiene una propuesta pedagógica
              actualizada, con actividades que fortalecen el pensamiento crítico,
              la creatividad y el trabajo colaborativo.
            </p>
          </div>

          <div className="sn-iconos">
            <div className="sn-item">
              🎓
              <p>Educación de calidad</p>
            </div>

            <div className="sn-item">
              🤝
              <p>Trabajo en comunidad</p>
            </div>

            <div className="sn-item">
              🌱
              <p>Desarrollo integral</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
