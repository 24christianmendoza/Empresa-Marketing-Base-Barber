export default function Menu() {
  const items = [
    { descripcion: "Platillo 1", precio: "$100" },
    { descripcion: "Platillo 2", precio: "$120" },
    { descripcion: "Platillo 3", precio: "$90" },
  ];

  return (
    <section>
      <h2>Menú</h2>
      <div className="menu-grid">
        {items.map((item, i) => (
          <div key={i} className="menu-item">
            <div className="imagen">[Imagen]</div>
            <p>{item.descripcion}</p>
            <span>{item.precio}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
