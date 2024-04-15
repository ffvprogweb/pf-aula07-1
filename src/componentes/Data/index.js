import React from "react";

// Dados do contexto
export const data = {
  rotulos: ["Ano", "Vendas", "Imobilizado"],
  ano2013: ["2013", 1000, 400],
  ano2014: ["2014", 1170, 460],
  ano2015: ["2015", 660, 1120],
  ano2016: ["2016", 1030, 540],
};

const DataContext = React.createContext(data);
export default DataContext;
