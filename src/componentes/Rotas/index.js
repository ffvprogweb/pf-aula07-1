import React from "react";
import { Routes, Route } from "react-router-dom";
import ConsultaCatalogo from "../ConsultaCatalogo";
import Header from "../Header";
import Footer from "../Footer";
import CadastrarProduto from "../CadastrarProduto";
import CadastrarCliente from "../CadastrarCliente";
import ConsultaCliente from "../ConsultaCliente";
import UploadImagem from "../UploadImagem";
import Menu from "../Menu";
import "./styles.css"; // Importa o arquivo CSS

function Rotas() {
  return (
    <div className="App">
      {/* Usa a classe 'App' para aplicar estilos */}
      <div className="content">
        {/* Usa a classe 'content' para aplicar estilos */}

        <div>
          <Header />
          <Menu />
          <Routes>
            <Route path="*" element={<ConsultaCatalogo />} />
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
    </div>
  );
}

export default Rotas;
