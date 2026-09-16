import "./masVendido.css";
import { FaWhatsapp} from "react-icons/fa";

export default function MasVendido() {
  return (
    
    <section className="mas-vendido">
      <h2 className="titulo">Tu estilo, nuestra especialidad</h2>
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/corte.jpg" alt="Platillo 1" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/corte2.jpg" alt="Platillo 2" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/corte3.jpg" alt="Platillo 3" />
          </div>
        </div>
      

        
      </div>
      <a
            href="https://wa.me/528117540834?text=%20Buenas,%20quiero%20pedir%20comida%20a%20domicilio%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            Agendar cita
          </a>
    </section>
  );
}
