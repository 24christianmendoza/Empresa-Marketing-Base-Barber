import Header from "./components/header";
import Carrusel from "./components/carrusel";
import TextoScroll from "./components/textoScroll";
import MasVendido from "./components/masVendido";
// import Menu1 from "./components/menu1";
// import MenuProductos from "./components/menuProductos";
import Promociones from "./components/promociones";
import Mapa from "./components/mapa";
import Footer from "./components/footer";
// import MenuSheets from "./components/menuSheets";
// import MenuProductosSheets from "./components/menuProductosSheets";
// import BarberProductos from "./components/barberProductos";
import TextoExperiencia from "./components/textoExperiencia";
import Servicios from "./components/servicios";




function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Carrusel />
        <TextoScroll />
        <MasVendido />
        <TextoExperiencia/>
        <Servicios/>
        <Promociones />
        <Mapa />
      </main>
      <Footer />
    </div>
  );
}

export default App;
