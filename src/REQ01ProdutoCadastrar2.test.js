import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProdutoCadastrar from "./componentes/ProdutoCadastrar";

//verifica o comportamento isolado do componente
test("ct01 - verificar o comportamento do cadastro de produto", async () => {
  render(
    <MemoryRouter>
      <ProdutoCadastrar />
    </MemoryRouter>
  );

  await waitFor(() => {
    const textElement = screen.getByText(/cadastro de produto/i);
    expect(textElement).toBeInTheDocument();
  });
});
