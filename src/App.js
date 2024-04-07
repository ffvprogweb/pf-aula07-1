import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import CadastrarProduto from "./componentes/CadastrarProduto";
import CadastrarCliente from "./componentes/CadastrarCliente";
import ConsultaCliente from "./componentes/ConsultaCliente";
import UploadImagem from "./componentes/UploadImagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./componentes/Sidebar";
function App() {
  //sidebar
  return (
    <BrowserRouter>
      <div className="App" style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <Routes>
            <Route path="/" element={<ConsultaCatalogo />} />
            <Route path="/produtos" element={<ConsultaCatalogo />} />
            <Route path="/clientes" element={<ConsultaCliente />} />
            <Route path="/cad-produto" element={<CadastrarProduto />} />

            <Route path="/edit-produto/:id" element={<CadastrarProduto />} />
            <Route path="/cad-cliente" element={<CadastrarCliente />} />
            <Route path="/upload" element={<UploadImagem />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
