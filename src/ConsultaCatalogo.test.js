import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("ct01 - verificar o comportamento da função consulta catalogo com sucesso", () => {
  //dado que o estado inicial da aplicação é renderizado na consulta de produtos
  const { getByText } = render(<App />);
  //quando procuro o texto na tela
  const textElement = getByText(/consulta catalogo/i); //lança o erro se não encontrar (findby gera undefined se nao encontrar e continua)
  //entao - o texto eh encontrado
  expect(textElement).toBeInTheDocument();
});

test("ct02 - verificar o comportamento da funcao consulta catalogo com sucesso", async () => {
  render(<App />);
  await waitFor(() => {
    const tabelaProdutos = screen.getByRole("table");
    const linhasProdutos = tabelaProdutos.querySelectorAll("tbody > tr");
    expect(linhasProdutos.length).toBeGreaterThanOrEqual(1);
  });
});
