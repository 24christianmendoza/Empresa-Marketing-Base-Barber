import "./servicios.css";

export default function Servicios() {
  return (
    <div className="servicios-lista">
      <h2 className="servicios-titulo">Haircut & Shave Selection</h2>

      <div className="servicio-item">
        <h3 className="servicio-nombre">Signature Executive Cut</h3>
        <p className="servicio-descripcion">
          Corte de cabello. Diagnóstico y diseño de corte personalizado. Ejecutamos con precisión (tijera o máquina) para lograr la imagen exacta que buscas, finalizando con peinado y producto.
        </p>
        <span className="servicio-precio">$230</span>
      </div>

      <div className="servicio-item">
        <h3 className="servicio-nombre">Proraso Royal Shave</h3>
        <p className="servicio-descripcion">
          La experiencia completa de barbería. Incluye espuma artesanal, pre-shave y vapor de ozono, masaje facial, pase de navaja suave y cierre con after-shave y aceite nutritivo.
        </p>
        <span className="servicio-precio">$230</span>
      </div>

      <div className="servicio-item">
        <h3 className="servicio-nombre">Ozone Express Beard</h3>
        <p className="servicio-descripcion">
          Mantenimiento y perfilado con recorte de altura y delineado preciso. Ritual con pre-shave, vapor de ozono y finalización con after-shave y aceite esencial.
        </p>
        <span className="servicio-precio">$200</span>
      </div>

      <div className="servicio-item">
        <h3 className="servicio-nombre">Junior Executive Cut</h3>
        <p className="servicio-descripcion">
          Asesoría y corte adaptado a su estilo. Paciencia y detalle para un resultado impecable.
        </p>
        <span className="servicio-precio">$200</span>
      </div>
    </div>
  );
}
