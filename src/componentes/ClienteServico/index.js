import axios from "axios";
const url1 = "http://localhost:8080/api/v1/clientes";

export const listaDeClientes = () => axios.get(url1);
export const cadastroDeCliente = (cliente) => axios.post(url1, cliente);
export const obtemCliente = (clienteId) => axios.get(url1 + `/` + clienteId);
export const updateCliente = (clienteId, cliente) =>
  axios.put(url1 + "/" + clienteId, cliente);
export const deleteCliente = (clienteId) =>
  axios.delete(url1 + "/" + clienteId);
