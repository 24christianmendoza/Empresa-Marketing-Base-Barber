import "./mapa.css";

export default function Mapa() {
  return (
    <section className="mapa">
      <h2 id="ubicaciones" className="mapa-titulo">Ubicación</h2>
      <div className="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.474109612964!2d-100.38739666332799!3d25.77806235252008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866291242cd083db%3A0x9faf0cdb7c4f7002!2sSoriana%20H%C3%ADper%20Solidaridad!5e0!3m2!1ses-419!2smx!4v1789419084859!5m2!1ses-419!2smx"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Ubicación del local"
        ></iframe>
      </div>

      {/* Bloque de información */}
      <div className="mapa-info">
        <div className="mapa-col izquierda">
          <p>Oboe 263, San Bernabé IX Sector, Monterrey, N.L.</p>
          <h4>Horario</h4>
          <p>Lunes a Sábado: 9 AM – 8 PM</p>
          <p>Domingo: 10 AM – 6 PM</p>
          <h4>Tel. 81 8000 0000</h4>

        </div>



        <div className="mapa-col derecha">
          {/* Dinámica debajo */}
          <div className="mapa-dinamica">
            <img src="/images/dinamicaBarber.png" alt="Entrega a domicilio" />
          </div>
        </div>
      </div>
    </section>
  );
}
