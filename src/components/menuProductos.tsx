import { useState } from "react";
import "./menuProductos.css";

export default function MenuProductos() {
    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("todos");

    const productos = [
        { id: 1, nombre: "Laptop Dell", precio: "$15,000", img: "/images/producto.jpg", categoria: "electronica" },
        { id: 2, nombre: "Monitor LG", precio: "$4,500", img: "/images/producto.jpg", categoria: "electronica" },
        { id: 3, nombre: "Teclado Mecánico", precio: "$1,200", img: "/images/producto.jpg", categoria: "gaming" },
        { id: 4, nombre: "Mouse Gamer", precio: "$800", img: "/images/producto.jpg", categoria: "gaming" },
        { id: 5, nombre: "Impresora HP", precio: "$3,200", img: "/images/producto.jpg", categoria: "oficina" },
        { id: 6, nombre: "Auriculares Sony", precio: "$2,500", img: "/images/producto.jpg", categoria: "electronica" },
        { id: 7, nombre: "Cámara Canon", precio: "$12,000", img: "/images/producto.jpg", categoria: "fotografia" },
        { id: 8, nombre: "Tablet Samsung", precio: "$7,000", img: "/images/producto.jpg", categoria: "electronica" },
        { id: 9, nombre: "Smartwatch Apple", precio: "$9,500", img: "/images/producto.jpg", categoria: "wearables" },
        { id: 10, nombre: "Disco Duro Externo", precio: "$1,800", img: "/images/producto.jpg", categoria: "almacenamiento" },
    ];

    // Filtrado por búsqueda y categoría
    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(search.toLowerCase()) &&
        (categoria === "todos" || p.categoria === categoria)
    );

    return (
        <section className="menu-productos">
            <h2 className="menu-productos-titulo">Productos</h2>

            {/* Contenedor de filtros y búsqueda */}
            <div className="menu-productos-controles">
                <div className="menu-productos-filtros">
                    <button onClick={() => setCategoria("todos")}>Todos</button>
                    <button onClick={() => setCategoria("electronica")}>Electrónica</button>
                    <button onClick={() => setCategoria("gaming")}>Gaming</button>
                    <button onClick={() => setCategoria("oficina")}>Oficina</button>
                    <button onClick={() => setCategoria("fotografia")}>Fotografía</button>
                    <button onClick={() => setCategoria("wearables")}>Wearables</button>
                    <button onClick={() => setCategoria("almacenamiento")}>Almacenamiento</button>
                </div>

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="menu-productos-busqueda"
                />
            </div>

            {/* Cards */}
            <div className="menu-productos-cards">
                {filtrados.map((p) => (
                    <div key={p.id} className="menu-productos-card">
                        <div className="menu-productos-imagen">
                            <img src={p.img} alt={p.nombre} />
                        </div>
                        <div className="menu-productos-descripcion">{p.nombre}</div>
                        <div className="menu-productos-precio">{p.precio}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
