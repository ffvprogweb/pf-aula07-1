import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import CadastrarProduto from "./componentes/CadastrarProduto";
import CadastrarCliente from "./componentes/CadastrarCliente";
import ConsultaCliente from "./componentes/ConsultaCliente";
import UploadImagem from "./componentes/UploadImagem";
import Menu from "./componentes/Menu";
import Relatorios from "./componentes/Relatorios";
import DataContext, { data } from "./componentes/DataContext";
import "./App.css"; // Importa o arquivo CSS
import { useState } from "react";
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
                <Route path="/" element={<ConsultaCatalogo />} />
                <Route path="/produtos" element={<ConsultaCatalogo />} />
                <Route path="/clientes" element={<ConsultaCliente />} />
                <Route path="/cad-produto" element={<CadastrarProduto />} />

                <Route
                  path="/edit-produto/:id"
                  element={<CadastrarProduto />}
                />
                <Route
                  path="/edit-cliente/:id"
                  element={<CadastrarCliente />}
                />

                <Route path="/cad-cliente" element={<CadastrarCliente />} />
                <Route path="/upload" element={<UploadImagem />} />
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
