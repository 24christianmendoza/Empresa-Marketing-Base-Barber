import { useState, useEffect } from "react";
import "./menuProductosSheets.css";

export default function MenuProductosSheets() {
    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("todos");
    const [productos, setProductos] = useState<any[]>([]);

    // Cargar datos desde Google Sheets
    useEffect(() => {
        const fetchData = async () => {
            try {
                const sheetId = "1ds8bBZaNd1b05_WfK7ROm4w6-672LOe1muMjfQqz9uk"; // ID de Google Sheet
                const range = "MenuCode!A:E"; // hoja auxiliar limpia
                const apiKey = "AIzaSyCzk-72OcOPucXDYHx9Xk9FMgBJ49XBacs";    //  API key

                const res = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
                );
                const data = await res.json();

                // Primera fila son headers, las demás son datos
                const rows = data.values.slice(1).filter((r: string[]) => r.length >= 5);

                const productos = rows.map((row: string[], index: number) => ({
                    id: index + 1,
                    nombre: row[0],
                    descripcion: row[1],
                    precio: row[2],
                    categoria: row[3],
                    img: row[4], // enlace directo thumbnail
                }));

                setProductos(productos);
            } catch (error) {
                console.error("Error cargando datos de Sheets:", error);
            }
        };

        fetchData();
    }, []);


    // Filtrado por búsqueda y categoría
    const filtrados = productos.filter(
        (p) =>
            p.nombre.toLowerCase().includes(search.toLowerCase()) &&
            (categoria === "todos" || p.categoria === categoria)
    );

    // Categorías únicas
    const categoriasUnicas = ["todos", ...new Set(productos.map((p) => p.categoria))];

    return (
        <section className="menuSheetsProductos">
            <h2 className="menuSheetsProductos-titulo">Productos</h2>

            <div className="menuSheetsProductos-controles">
                <div className="menuSheetsProductos-filtros">
                    {categoriasUnicas.map((cat) => (
                        <button key={cat} onClick={() => setCategoria(cat)}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="menuSheetsProductos-busqueda"
                />
            </div>

            <div className="menuSheetsProductos-cards">
                {filtrados.map((p) => (
                    <div key={p.id} className="menuSheetsProductos-card">
                        <div className="menuSheetsProductos-imagen">
                            <img 
                             src={!p.img || p.img === "indefinido" || p.img === "#N/A"? "/images/productoDefault.png" : (p.img).trim()}
                             alt={p.nombre}
                             style={{ width: "200px", height: "auto" }} 
                            />
                        </div>
                        <div className="menuSheetsProductos-nombre">{p.nombre}</div>
                        <div className="menuSheetsProductos-descripcion">{p.descripcion}</div>
                        <div className="menuSheetsProductos-precio">{p.precio}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
