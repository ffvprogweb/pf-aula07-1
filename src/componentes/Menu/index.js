import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUser,
  faPlus,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

function Menu() {
  return (
    <div>
      <nav className="sidebar">
        <h5> SIG - Menu </h5>
        <ul>
          <li>
            <FontAwesomeIcon icon={faList} />
            <Link to="/produtos">Consulta Produtos</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <Link to="/clientes">Consulta de Clientes</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <Link to="/cad-produto">Cadastrar Produto</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <Link to="/cad-cliente">Cadastrar Cliente</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUpload} />
            <Link to="/upload">Upload de Imagem</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUpload} />
            <Link to="/relatorios">Relatórios</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
