import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listaDeClientes, deleteCliente } from "../ClienteServico";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function ConsultaCliente() {
  const [clientes, setClientes] = useState([]);
  const navigator = useNavigate();
  const [mensagem, setMensagem] = useState("");
  useEffect(() => {
    getAllClientes();
  }, []);

  function atualizaCliente(id) {
    navigator(`/edit-cliente/${id}`);
  }
  function exclusaoCliente(id) {
    console.log("consulta cli - fc exclusao cliente - id=", id);
    deleteCliente(id)
      .then((response) => {
        getAllClientes();
      })
      .catch((error) => {
        console.error(error);
        setMensagem("Ocorreu um erro na exclusão de cliente.");
      });
  }
  function getAllClientes() {
    listaDeClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error(error);
        setMensagem("Ocorreu um erro na consulta de informações de clientes.");
      });
  }

  return (
    <div className="container">
      <h5 className="text-center">Consulta Cliente </h5>
      {mensagem && <div className="alert alert-success">{mensagem}</div>}{" "}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>CEP</th>
            <th>Endereco</th>
            <th>email</th>
            <th>Cadastro</th>
            <th>Revisão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="Catalogo">
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.cep}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.email}</td>
              <td>{cliente.dataCadastro}</td>
              <td>{cliente.dataRevisao}</td>

              <td>
                <button
                  className="btn btn-info "
                  onClick={() => atualizaCliente(cliente.id)}
                >
                  Atualiza
                </button>
                <button
                  className="btn btn-danger "
                  onClick={() => exclusaoCliente(cliente.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Exclui
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ConsultaCliente;
