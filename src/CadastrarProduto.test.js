import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "./App";

test("ct01 - verificar o comportamento do cadastro de produto", async () => {
  render(<App />);
  await waitFor(() => {
    const textElement = screen.getByText(/sig - menu/i);
    expect(textElement).toBeInTheDocument();
  });
  // Encontra o campo de entrada pela etiqueta associada (label)
  const linkCadastrarProduto = screen.getByText("Cadastrar Produto");
  // Simula um click no botao
  fireEvent.click(linkCadastrarProduto);
  await waitFor(() => {
    const tituloElement2 = screen.getByText(/cadastrar produto/i);
    expect(tituloElement2).toBeInTheDocument();
  });
  //*********************************************************** */
  // Entrada de dados
  //*********************************************************** */
  // Encontre o campo de entrada pela etiqueta associada (label)
  const inputDescricao = screen.getByLabelText("Descrição:");
  // Simule uma entrada de texto
  fireEvent.change(inputDescricao, {
    target: { value: "Eletrobomba 110v" },
  });
  // Encontre o campo de entrada pela etiqueta associada (label)
  const inputCategoria = screen.getByLabelText("Categoria:");
  // Simule uma entrada de texto
  fireEvent.change(inputCategoria, {
    target: { value: "Maquina de Lavar" },
  });
  // Encontre o campo de entrada pela etiqueta associada (label)
  const inputQuantidade = screen.getByLabelText("Quantidade:");
  // Simule uma entrada de texto
  fireEvent.change(inputQuantidade, {
    target: { value: "12" },
  });
  // Encontre o campo de entrada pela etiqueta associada (label)
  const inputCusto = screen.getByLabelText("Custo:");
  // Simule uma entrada de texto
  fireEvent.change(inputCusto, {
    target: { value: "31.50" },
  });

  // Encontre o botão pelo ID
  const botaoSubmit = screen.getByRole("button", { name: "Submit" });

  // Simula o click no botao
  fireEvent.click(botaoSubmit);
  await waitFor(() => {
    // Confirma se o estado atual eh a tela de consulta
    const tituloElement1 = screen.getByText(/consulta catalogo/i);
    expect(tituloElement1).toBeInTheDocument();
  });
});
