import { useState } from "react";
import "./Canciones.css";

import vicenteLopezYPlanes from "../../assets/cancionesImagenes/vicente_lopez_y_planes.jpg";
import blasParera from "../../assets/cancionesImagenes/blas_parera.jpg";
import hectorPanizza from "../../assets/cancionesImagenes/hector_panizza.jpg";
import cayetanoAlbertoSilva from "../../assets/cancionesImagenes/cayetano_alberto_silva.jpg";
import joseTieri from "../../assets/cancionesImagenes/jose_tieri.jpg";
import juanPedroEsnaola from "../../assets/cancionesImagenes/juan_pedro_esnaola.jpg";

export default function Canciones() {
  const [cancionActiva, setCancionActiva] = useState(null); 
  
  const canciones = [
  {
    id: 1,
    titulo: "Himno Nacional Argentino",
    letra: "Vicente López y Planes",
    musica: "Blas Parera",
    anio: "1812",
    portada: vicenteLopezYPlanes,
    iframe: "https://open.spotify.com/embed/track/1Xm9G0H8dtDyRvcqlDvugI"
  },
  {
    id: 2,
    titulo: "Himno Nacional Argentino (Instrumental)",
    letra: "Vicente López y Planes",
    musica: "Blas Parera",
    anio: "1812",
    portada: blasParera,
    iframe: "https://open.spotify.com/embed/track/6zUqU0SEbB0EiJjuM3dS3S"
  },
  {
    id: 3,
    titulo: "Aurora",
    letra: "Héctor Blomberg",
    musica: "Héctor Panizza",
    anio: "1908",
    portada: hectorPanizza,
    iframe: "https://open.spotify.com/embed/track/4ehBNy9cwxA37DcTG2WH4j"
  },
  {
    id: 4,
    titulo: "San Lorenzo",
    letra: "Carlos Javier Benielli",
    musica: "Cayetano Alberto Silva",
    anio: "1901",
    portada: cayetanoAlbertoSilva,
    iframe: "https://open.spotify.com/embed/track/6nDbBe96eWkowt5AF7BS2G"
  },
  {
    id: 5,
    titulo: "Marcha de las Malvinas",
    letra: "Carlos Obligado",
    musica: "José Tieri",
    anio: "1940",
    portada: joseTieri,
    iframe: "https://open.spotify.com/embed/track/7H851ulmXQFlBOrLjbyHgj"
  },
  {
    id: 6,
    titulo: "Mi Bandera",
    letra: "Juan Chassaing",
    musica: "Juan Pedro Esnaola",
    anio: "1909",
    portada: juanPedroEsnaola,
    iframe: "https://open.spotify.com/embed/track/3kXNq3RgOvf6cnxeJlQAFe"
  }
];

  return (
    <main className="canciones">
      <h2 className="titulo-pagina">Canciones Patrias</h2>

      <section className="canciones-grid">
        {canciones.map((c) => (
          <div key={c.id} className="cancion-card">
            
            <img src={c.portada} alt={c.titulo} className="cancion-portada" />

            <div className="cancion-info">
              <h3>{c.titulo}</h3>
              <p><strong>Letra:</strong> {c.letra}</p>
              <p><strong>Música:</strong> {c.musica}</p>
              <p><strong>Año:</strong> {c.anio}</p>
            </div>

            <button
              className="btn-reproducir"
              onClick={() => setCancionActiva(c.id === cancionActiva ? null : c.id)}
            >
              ▶
            </button>

            {cancionActiva === c.id && (
              <iframe
                src={c.iframe}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="cancion-iframe"
              ></iframe>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}