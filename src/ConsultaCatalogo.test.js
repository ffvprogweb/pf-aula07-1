import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
test("ct01 - verificar a integracao na consulta", () => {
  render(<App />);
  const textElement = screen.getByText(/consulta catalogo/i);
  expect(textElement).toBeInTheDocument();
});
test("ct02 - verificar a integracao no resultado da consulta", async () => {
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText("eletrobomba")).toBeInTheDocument();
  });
});

test("ct03 - verificar a quantidade de linhas na tabela de produtos", async () => {
  render(<App />);
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");
    expect(linhasProdutos.length).toBeGreaterThan(1);
  });
});
