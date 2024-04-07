import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="blue">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            SIGVS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/produtos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Produtos</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/clientes" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Clientes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cad-produto" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">
                Cadastrar Produto
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cad-cliente" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">
                Cadastrar Cliente
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/upload" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="upload">
                Upload de Imagem
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            IMT
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
export default Sidebar;
