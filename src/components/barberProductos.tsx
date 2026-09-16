import { useState } from "react";
import "./barberProductos.css";

export default function BarberProductos() {
  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("todos");

  // Ejemplo de productos de barbería
  const productos = [
    { id: 1, nombre: "Corte Clásico", descripcion: "Estilo tradicional", precio: "$150", categoria: "cortes", img: "" },
    { id: 2, nombre: "Afeitado Premium", descripcion: "Con toalla caliente", precio: "$200", categoria: "afeitado", img: "" },
    { id: 3, nombre: "Tinte Cabello", descripcion: "Coloración profesional", precio: "$300", categoria: "color", img: "" },
    { id: 4, nombre: "Barba Perfilada", descripcion: "Diseño y estilo", precio: "$180", categoria: "barba", img: "" },
  ];

  const filtrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase()) &&
      (categoria === "todos" || p.categoria === categoria)
  );

  const categoriasUnicas = ["todos", ...new Set(productos.map((p) => p.categoria))];

  return (
    <section className="barber">
      <h2 className="barber-titulo">Servicios de Barbería</h2>

      <div className="barber-controles">
        <div className="barber-filtros">
          {categoriasUnicas.map((cat) => (
            <button key={cat} onClick={() => setCategoria(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Buscar servicio..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="barber-busqueda"
        />
      </div>

      <div className="barber-cards">
        {filtrados.map((p) => (
          <div key={p.id} className="barber-card">
            <div className="barber-imagen">
              <img src={p.img || "/images/masVendido1.avif"} alt={p.nombre} />
            </div>
            <div className="barber-nombre">{p.nombre}</div>
            <div className="barber-descripcion">{p.descripcion}</div>
            <div className="barber-precio">{p.precio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
