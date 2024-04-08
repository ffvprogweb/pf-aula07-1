import React, { useState } from "react";

import { upload } from "../ProdutoServico";
import "./styles.css";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [id, setId] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (selectedFile && id) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("id", id);

      upload(formData)
        .then((response) => {
          console.log("Resposta da API:", response.data);
          setMensagem(response.data);
        })
        .catch((error) => {
          console.error("Erro ao fazer upload:", error);
          setMensagem("Ocorreu um erro no upload do arquivo", error.data);
        });
    } else {
      setMensagem("Por favor, selecione um arquivo de imagem e forneça um ID.");
    }
  };

  return (
    <div className="container mt-5">
      <h5>Upload de Imagem</h5>
      {mensagem && <div className="alert alert-success">{mensagem}</div>}{" "}
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="inputId" className="form-label">
            ID:
          </label>
          <input
            type="text"
            placeholder="Entre com o código do produto"
            className="form-control input-control"
            id="inputId"
            value={id}
            onChange={handleIdChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputFile" className="form-label">
            Escolher arquivo de imagem
          </label>
          <input
            type="file"
            className="form-control input-control"
            id="inputFile"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
