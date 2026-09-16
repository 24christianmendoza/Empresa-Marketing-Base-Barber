import { useEffect, useState } from "react";
import "./menuSheets.css";

type Producto = {
  nombre: string;
  descripcion: string;
  precio: string;
  categoria: string;
  img: string;
};

export default function MenuSheets() {
  const [productos, setProductos] = useState<Producto[]>([]);

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

  // Agrupar productos por categoría
  const secciones = productos.reduce((acc: any, p) => {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
  }, {});

  return (
    <section className="menuSheets">
      <h2 id="menu" className="menu-titulo">Menú</h2>
      {Object.keys(secciones).map((categoria) => (
        <div key={categoria}>
          <h3 className="menuSheets-subtitulo">{categoria}</h3>
          <div className="menuSheets-cards">
            {secciones[categoria].map((p: Producto, i: number) => (
              <div key={i} className="menuSheets-card">
                <div className="menuSheets-imagen">
                  <img
                    src={!p.img || p.img === "indefinido" || p.img === "#N/A" ? "/images/productoDefault.png" : (p.img).trim()}
                    alt={p.nombre}
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
                <div className="menuSheets-nombre">{p.nombre}</div>
                <div className="menuSheets-descripcion">{p.descripcion}</div>
                <div className="menuSheets-precio">{p.precio}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

  );


}
