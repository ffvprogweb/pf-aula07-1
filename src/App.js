import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import CadastrarProduto from "./componentes/CadastrarProduto";
import CadastrarCliente from "./componentes/CadastrarCliente";
import ConsultaCliente from "./componentes/ConsultaCliente";
import UploadImagem from "./componentes/UploadImagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
function App() {
  return (
    <div>
      {/* Ajusta o marginLeft para coincidir com a largura da barra lateral */}
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <BrowserRouter>
          <div className="App" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <Header />
              <Menu />
              <Routes>
                <Route path="/" element={<ConsultaCatalogo />} />
                <Route path="/produtos" element={<ConsultaCatalogo />} />
                <Route path="/clientes" element={<ConsultaCliente />} />
                <Route path="/cad-produto" element={<CadastrarProduto />} />

                <Route
                  path="/edit-produto/:id"
                  element={<CadastrarProduto />}
                />
                <Route path="/cad-cliente" element={<CadastrarCliente />} />
                <Route
                  path="/edit-cliente/:id"
                  element={<CadastrarCliente />}
                />
                <Route path="/upload" element={<UploadImagem />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
