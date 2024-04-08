import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("ct01 - verificar o comportamento da função consulta catalogo com sucesso", () => {
  render(<App />);
  const textElement = screen.getByText(/consulta catalogo/i);
  expect(textElement).toBeInTheDocument();
});

test("ct02 - verificar o comportamento da funcao consulta catalog com sucesso", async () => {
  render(<App />);
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");
    expect(linhasProdutos.length).toBeGreaterThanOrEqual(1);
  });
});
