import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("ct01 - verificar o comportamento da função consulta catalogo com sucesso", () => {
  //dado que a aplicação foi renderizada
  const { getByText } = render(<App />);

  const textElement = getByText(/consulta catalogo/i); //lança o erro se não encontrar (find gera undefined)
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
