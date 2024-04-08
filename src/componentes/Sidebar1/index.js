import React from "react";
import { Link } from "react-router-dom";

function Sidebar1() {
  const sidebarStyle = {
    position: "fixed",
    top: 0,
    left: 0, // Definindo a posição à esquerda
    height: "100vh",
    width: "200px", // Largura do sidebar
    backgroundColor: "#f0f0f0", // Cor de fundo do sidebar
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Sombra
    zIndex: 1000, // Z-index para garantir que o sidebar esteja na frente de outros elementos
  };

  return (
    <div>
      <nav style={sidebarStyle}>
        <h5> SIG - Menu </h5>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/produtos">Consulta Produtos</Link>
          </li>
          <li>
            <Link to="/clientes">Consulta de Clientes</Link>
          </li>
          <li>
            <Link to="/cad-produto">Cadastrar Produto</Link>
          </li>
          <li>
            <Link to="/cad-cliente">Cadastrar Cliente</Link>
          </li>
          <li>
            <Link to="/upload">Upload de Imagem</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar1;
