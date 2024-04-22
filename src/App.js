import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProdutoConsulta from "./componentes/ProdutoConsulta";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import ProdutoCadastrar from "./componentes/ProdutoCadastrar";
import ClienteCadastrar from "./componentes/ClienteCadastrar";
import ClienteConsulta from "./componentes/ClienteConsulta";
import ProdutoUploadImagem from "./componentes/ProdutoUploadImagem";
import Menu from "./componentes/Menu";
import Relatorios from "./componentes/Relatorios";
import DataContext, { data } from "./componentes/DataContext";
import "./App.css";

/* gerenciamento das rotas*/
function App() {
  const [state, setState] = useState(data);
  return (
    <DataContext.Provider value={{ state, setState }}>
      <div className="App">
        {/* Usa a classe 'App' para aplicar estilos */}
        <div className="content">
          {/* Usa a classe 'content' para aplicar estilos */}
          <BrowserRouter>
            <div>
              <Header />
              <Menu />
              <Routes>
                <Route path="/" element={<ProdutoConsulta />} />
                <Route path="/produtos" element={<ProdutoConsulta />} />
                <Route path="/clientes" element={<ClienteConsulta />} />
                <Route path="/cad-produto" element={<ProdutoCadastrar />} />

                <Route
                  path="/edit-produto/:id"
                  element={<ProdutoCadastrar />}
                />
                <Route
                  path="/edit-cliente/:id"
                  element={<ClienteCadastrar />}
                />

                <Route path="/cad-cliente" element={<ClienteCadastrar />} />
                <Route path="/upload" element={<ProdutoUploadImagem />} />
                <Route path="/relatorios" element={<Relatorios />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
