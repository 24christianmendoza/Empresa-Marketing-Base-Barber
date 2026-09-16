import "./menu1.css";

export default function Menu1() {
  // Definimos las secciones y productos en un solo arreglo
  const secciones = [
    {
      titulo: "Sección 1",
      productos: [
        { id: 1, nombre: "Platillo 1", descripcion: "Delicioso platillo 1", precio: "$99", img: "/images/masVendido1.avif" },
        { id: 2, nombre: "Platillo 2", descripcion: "Delicioso platillo 2", precio: "$149", img: "/images/masVendido2.avif" },
        { id: 3, nombre: "Platillo 3", descripcion: "Delicioso platillo 3", precio: "$199", img: "/images/masVendido3.avif" },
        { id: 4, nombre: "Platillo 4", descripcion: "Delicioso platillo 4", precio: "$199", img: "/images/masVendido1.avif" },
        { id: 5, nombre: "Platillo 5", descripcion: "Delicioso platillo 5", precio: "$199", img: "/images/masVendido1.avif" },
        { id: 6, nombre: "Platillo 6", descripcion: "Delicioso platillo 6", precio: "$199", img: "/images/masVendido1.avif" },
      ],
    },
    {
      titulo: "Sección 2",
      productos: [
        { id: 7, nombre: "Platillo 1", descripcion: "Delicioso platillo 1", precio: "$99", img: "/images/masVendido1.avif" },
        { id: 8, nombre: "Platillo 2", descripcion: "Delicioso platillo 2", precio: "$149", img: "/images/masVendido2.avif" },
        { id: 9, nombre: "Platillo 3", descripcion: "Delicioso platillo 3", precio: "$199", img: "/images/masVendido1.avif" },
        { id: 10, nombre: "Platillo 4", descripcion: "Delicioso platillo 4", precio: "$199", img: "/images/masVendido1.avif" },
        { id: 11, nombre: "Platillo 5", descripcion: "Delicioso platillo 5", precio: "$199", img: "/images/masVendido1.avif" },
        { id: 12, nombre: "Platillo 6", descripcion: "Delicioso platillo 6", precio: "$199", img: "/images/masVendido1.avif" },
      ],
    },
    {
      titulo: "Sección 3",
      productos: [
        { id: 13, nombre: "Platillo 1", descripcion: "Delicioso platillo 1", precio: "$99", img: "/images/masVendido1.avif" },
        { id: 14, nombre: "Platillo 2", descripcion: "Delicioso platillo 2", precio: "$149", img: "/images/masVendido1.avif" },
        { id: 15, nombre: "Platillo 3", descripcion: "Delicioso platillo 3", precio: "$199", img: "/images/masVendido1.avif" },
      ],
    },
  ];

  return (
    <section className="menu">
      <h2 id="menu" className="menu-titulo">Menú</h2>
      {secciones.map((seccion) => (
        <div key={seccion.titulo}>
          <h3 className="menu-subtitulo">{seccion.titulo}</h3>
          <div className="menu-cards">
            {seccion.productos.map((p) => (
              <div key={p.id} className="menu-card">
                <div className="menu-imagen">
                  <img src={p.img} alt={p.nombre} />
                </div>
                <div className="menu-nombre">{p.nombre}</div>
                <div className="menu-descripcion">{p.descripcion}</div>
                <div className="menu-precio">{p.precio}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
