import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ProdutoUploadImagem from "./componentes/ProdutoUploadImagem"; // Importe o componente ImageUpload

describe("ImageUpload Component", () => {
  it("deve exibir mensagem de erro ao enviar imagem com ID branco", async () => {
    const { getByText, getByRole } = render(<ProdutoUploadImagem />);

    const button = getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    await waitFor(() =>
      expect(
        getByText("Por favor, selecione um arquivo de imagem e forneça um ID.")
      ).toBeInTheDocument()
    );
  });

  it("deve exibir mensagem de sucesso id e arquivo valido", async () => {
    const { getByLabelText, getByRole, getByText } = render(
      <ProdutoUploadImagem />
    );

    const file = new File(["(blob)"], "E:imagens/produto1.png", {
      type: "image/png",
    });
    const inputFile = getByLabelText("Escolher arquivo de imagem");
    fireEvent.change(inputFile, { target: { files: [file] } });

    const inputId = getByLabelText("ID:");
    fireEvent.change(inputId, { target: { value: "2" } });

    const button = getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    await waitFor(() =>
      expect(getByText("Imagem enviada com sucesso")).toBeInTheDocument()
    );
  });

  it("deve enviar mensagem de erro ao enviar imagem para id nao cadastrado", async () => {
    const { getByLabelText, getByRole, getByText } = render(
      <ProdutoUploadImagem />
    );

    const file = new File(["(blob)"], "test.png", { type: "image/png" });
    const inputFile = getByLabelText("Escolher arquivo de imagem");
    fireEvent.change(inputFile, { target: { files: [file] } });

    const inputId = getByLabelText("ID:");
    fireEvent.change(inputId, { target: { value: "123" } });

    const button = getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    await waitFor(() =>
      expect(
        getByText("Ocorreu um erro no upload do arquivo")
      ).toBeInTheDocument()
    );
  });
});
