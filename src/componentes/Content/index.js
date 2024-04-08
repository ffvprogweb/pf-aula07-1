function Content() {
  return (
    <div style={{ marginLeft: "200px", padding: "20px" }}>
      {" "}
      {/* Ajuste o marginLeft para coincidir com a largura da barra lateral */}
      <header style={{ marginBottom: "20px" }}>
        {/* Cabeçalho */}
        <h1>Cabeçalho</h1>
      </header>
      <main>
        {/* Conteúdo principal (consultas) */}
        <h2>Conteúdo Principal</h2>
        <p>Conteúdo da sua aplicação vai aqui...</p>
      </main>
      <footer style={{ marginTop: "20px" }}>
        {/* Rodapé */}
        <h2>Rodapé</h2>
      </footer>
    </div>
  );
}
export default Content;
