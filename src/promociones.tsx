export default function Promociones() {
  const promos = [
    { descripcion: "Promo 1", precio: "$80" },
    { descripcion: "Promo 2", precio: "$70" },
  ];

  return (
    <section>
      <h2>Promociones</h2>
      <div className="promo-grid">
        {promos.map((promo, i) => (
          <div key={i} className="promo-item">
            <div className="imagen">[Imagen]</div>
            <p>{promo.descripcion}</p>
            <span>{promo.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
