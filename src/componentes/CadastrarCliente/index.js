import React, { useState, useEffect } from "react";
import {
  cadastroDeCliente,
  obtemCliente,
  updateCliente,
} from "../ClienteServico";
import { useNavigate, useParams } from "react-router-dom";
function CadastrarCliente() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  const { id } = useParams();
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({
    cpf: "",
    nome: "",
    email: "",
    cep: "",
    dataCadastro: "",
    dataRevisao: "",
  });
  const navigator = useNavigate();
  useEffect(() => {
    if (id) {
      obtemCliente(id)
        .then((response) => {
          setCpf(response.data.cpf);
          setNome(response.data.nome);
          setEmail(response.data.email);
          setCep(response.data.cep);
        })
        .catch((error) => {
          console.error(error);
          setMensagem(
            "Ocorreu um erro na consulta para atualizar informações de produto."
          );
        });
    }
  }, [id]);
  function manipulaCpf(e) {
    setCpf(e.target.value);
  }
  function manipulaNome(e) {
    setNome(e.target.value);
  }
  function manipulaEmail(e) {
    setEmail(e.target.value);
  }
  function manipulaCep(e) {
    setCep(e.target.value);
  }

  function saveOrUpdateCliente(e) {
    e.preventDefault();
    if (validateForm()) {
      const cliente = {
        cpf,
        nome,
        email,
        cep,
      };
      console.log(cliente);
      if (id) {
        updateCliente(id, cliente)
          .then((response) => {
            console.log(response.data);
            navigator("/clientes");
          })
          .catch((error) => {
            console.error(error);
            setMensagem("Ocorreu um erro na atualização de informações.");
          });
      } else {
        cadastroDeCliente(cliente)
          .then((response) => {
            console.log(response.data);
            navigator("/clientes");
          })
          .catch((error) => {
            console.error(error);
            setMensagem("Erro no cadastro.");
          });
      }
    }
  }
  function validateForm() {
    let valid = true;
    const msgErro = { ...errors };
    if (cpf.trim()) {
      msgErro.cpf = "";
    } else {
      msgErro.cpf = "Atributo obrigatório. ";
      valid = false;
    }
    if (nome.trim()) {
      msgErro.nome = "";
    } else {
      msgErro.nome = " Atributo obrigatório. ";
      valid = false;
    }
    if (email.trim()) {
      msgErro.email = "";
    } else {
      msgErro.email = "Atributo obrigatório. ";
      valid = false;
    }
    if (cep.trim()) {
      msgErro.cep = "";
    } else {
      msgErro.cep = "Atributo inválido. ";
      valid = false;
    }
    setErrors(msgErro);
    return valid;
  }
  function pageTitle() {
    if (id) {
      return <h2 className="text-center"> Atualizar Cliente</h2>;
    } else {
      return <h2 className="text-center"> Cadastrar Cliente</h2>;
    }
  }
  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          {pageTitle()}
          <div className="card-body">
            {mensagem && <div className="alert alert-success">{mensagem}</div>}{" "}
            {/* Renderiza o feedback se existir */}
            <form>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="cpf">
                  CPF:
                </label>
                <input
                  type="text"
                  placeholder="Entre com o CPF do cliente"
                  name="cpf"
                  id="cpf"
                  value={cpf}
                  className={`form-control ${errors.cpf ? `is-invalid` : ``}`}
                  onChange={manipulaCpf}
                ></input>
                {errors.descricao && (
                  <div className="invalid-feedback"> {errors.cpf}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="nome">
                  Nome:
                </label>
                <input
                  type="text"
                  placeholder="Entre com o nome do cliente"
                  name="nome"
                  id="nome"
                  value={nome}
                  className={`form-control ${
                    errors.categoria ? `is-invalid` : ``
                  }`}
                  onChange={manipulaNome}
                ></input>
                {errors.nome && (
                  <div className="invalid-feedback"> {errors.nome}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">
                  e-mail:
                </label>
                <input
                  type="text"
                  placeholder="Entre com o e-mail do cliente"
                  name="email"
                  id="email"
                  value={email}
                  className={`form-control ${errors.email ? `is-invalid` : ``}`}
                  onChange={manipulaEmail}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="cep">
                  CEP:
                </label>
                <input
                  type="text"
                  placeholder="Entre com o CEP do endereço"
                  name="cep"
                  id="cep"
                  value={cep}
                  className={`form-control ${errors.cep ? `is-invalid` : ``}`}
                  onChange={manipulaCep}
                ></input>
                {errors.cep && (
                  <div className="invalid-feedback"> {errors.cep}</div>
                )}
              </div>

              <button
                id="submit"
                className="btn btn-success"
                onClick={saveOrUpdateCliente}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CadastrarCliente;
