import "./Canciones.css";

export default function Canciones() {
  const canciones = [
    {
      titulo: "Himno Nacional Argentino",
      letra: "Vicente López y Planes",
      musica: "Blas Parera",
      anio: "1812",
    },
    {
      titulo: "Himno Nacional Argentino (Instrumental)",
      letra: "Vicente López y Planes",
      musica: "Blas Parera",
      anio: "1812",
    },
    {
      titulo: "Aurora",
      letra: "Héctor Blomberg",
      musica: "Héctor Panizza",
      anio: "1908",
    },
    {
      titulo: "San Lorenzo",
      letra: "Carlos Javier Benielli",
      musica: "Cayetano Alberto Silva",
      anio: "1901",
    },
    {
      titulo: "Marcha de las Malvinas",
      letra: "Carlos Obligado",
      musica: "José Tieri",
      anio: "1940",
    },
    {
      titulo: "Mi Bandera",
      letra: "Juan Chassaing",
      musica: "Juan Pedro Esnaola",
      anio: "1909",
    },
  ];

  return (
    <main className="canciones">
      <h2>Canciones Patrias</h2>

      <section className="lista-canciones">
        {canciones.map((c, i) => (
          <div
            key={i}
            className="cancion-card"
            aria-label={`Información sobre ${c.titulo}`}
          >
            <h3>{c.titulo}</h3>
            <p>
              <strong>Letra:</strong> {c.letra}
            </p>
            <p>
              <strong>Música:</strong> {c.musica}
            </p>
            <p>
              <strong>Año:</strong> {c.anio}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
