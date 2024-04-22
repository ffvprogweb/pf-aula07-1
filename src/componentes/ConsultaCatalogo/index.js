import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { listaDeProdutos, deleteProduto } from "../ProdutoServico";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import ProdutoConverteBase64ToImage from "../ProdutoConvertBase64ToImage";
function ConsultaCatalogo() {
  const [produtos, setProdutos] = useState([]);
  const navigator = useNavigate();
  const [mensagem, setMensagem] = useState("");
  useEffect(() => {
    getAllProdutos();
  }, []);

  function atualizaProduto(id) {
    navigator(`/edit-produto/${id}`);
  }
  function exclusaoProduto(id) {
    console.log("consulta cat - fc exclusao prod - id=", id);
    deleteProduto(id)
      .then((response) => {
        getAllProdutos();
      })
      .catch((error) => {
        console.error(error);
        setMensagem("Ocorreu um erro na exclusão de produto.");
      });
  }
  function getAllProdutos() {
    listaDeProdutos()
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error(error);
        setMensagem("Ocorreu um erro na consulta de informações de produto.");
      });
  }

  return (
    <div className="container">
      <h5 className="text-center">Consulta Catalogo </h5>
      {mensagem && <div className="alert alert-success">{mensagem}</div>}{" "}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Custo</th>
            <th>Quant</th>
            <th>Produto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="Catalogo">
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.categoria}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidadeNoEstoque}</td>
              <td>
                <img
                  src={ProdutoConverteBase64ToImage(produto.imagem)}
                  alt="Imagem do produto"
                />
              </td>
              <td>
                <button
                  className="btn btn-info "
                  onClick={() => atualizaProduto(produto.id)}
                >
                  Atualiza
                </button>
                <button
                  className="btn btn-danger "
                  onClick={() => exclusaoProduto(produto.id)}
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
export default ConsultaCatalogo;
