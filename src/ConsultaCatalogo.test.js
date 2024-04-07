import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";

test("ct01 - verificar a integracao na consulta", () => {
  render(<ConsultaCatalogo />);
  const textElement = screen.getByText(/consulta catalogo/i);
  expect(textElement).toBeInTheDocument();
});

test("ct03 - verificar a quantidade de linhas na tabela de produtos", async () => {
  render(<ConsultaCatalogo />);
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");
    expect(linhasProdutos.length).toBeGreaterThanOrEqual(1);
  });
});
