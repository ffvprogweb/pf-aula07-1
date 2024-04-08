import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <div>
      <nav className="sidebar">
        <h5> SIG - Menu </h5>
        <ul>
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

export default Menu;
