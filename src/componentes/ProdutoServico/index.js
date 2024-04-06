import axios from "axios";
const url1 = "http://localhost:8080/api/v1/produtos";
const url2 = "http://localhost:8080/api/v1/produtos/imadb";
const url3 = "http://localhost:8080/api/v1/produtos/catalogo";
export const listaDeProdutos = () => axios.get(url3);
export const cadastroDeProduto = (produto) => axios.post(url1, produto);
export const obtemProduto = (produtoId) => axios.get(url1 + `/` + produtoId);
export const updateProduto = (produtoId, produto) =>
  axios.put(url1 + "/" + produtoId, produto);
export const deleteProduto = (produtoId) =>
  axios.delete(url1 + "/" + produtoId);
export const upload = (formData) =>
  axios.post(url2, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
