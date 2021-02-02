import React from 'react';
import './estilo.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [filtroId, setFiltro] = React.useState([0]);

  React.useEffect(async () => {
    const url = 'http://localhost:3001/produtos';
    const response = await fetch(url);
    setProdutos(await response.json());
  }, []);

  function filtro(event) {
    let lista = event.target.id;
    setFiltro(lista);
  }

  return (
    <main className="container-fluid">
      <div className="d-flex mt-4">
        <aside className="categorias mr-5">
          <h3>Categorias</h3>
          <ul className="list-group ml-2" style={{ width: '150px' }}>
            <li
              id={0}
              className="list-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={filtro}
            >
              Todos
              <span className="badge badge-danger badge-pill mx-2">10</span>
            </li>

            <li
              id={1}
              className="list-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={filtro}
            >
              Geladeira
              <span className="badge badge-danger badge-pill mx-2">3</span>
            </li>

            <li
              id={2}
              className="list-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={filtro}
            >
              Lavadora
              <span className="badge badge-danger badge-pill mx-2">3</span>
            </li>

            <li
              id={3}
              className="list-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={filtro}
            >
              Lava-Louças
              <span className="badge badge-danger badge-pill mx-2">2</span>
            </li>

            <li
              id={4}
              className="list-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={filtro}
            >
              Microondas
              <span className="badge badge-danger badge-pill mx-2">2</span>
            </li>
          </ul>
        </aside>
        <div className="d-flex flex-wrap">
          {produtos.map((produto) => {
            if (filtroId == 0) {
              return (
                <div
                  key={produto.id_produto}
                  className={produto.id_categoria + ' card border-0 mx-2 mb-4'}
                  style={{ width: '200px', background: '#f7d0d0' }}
                >
                  <div className="card-img-top d-flex flex-column align-items-center m-0 p-0">
                    <img
                      className="mx-auto mt-3 mb-0"
                      src={produto.imagem}
                      alt={produto.categoria}
                      style={{ maxWidth: '170px', maxHeight: '170px' }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <p className="card-text m-0 p-0"> {produto.descricao} </p>
                    <hr className="w-100 p-0 my-1" />
                    <del className="card-title m-0 p-0">R$ {produto.preco}</del>
                    <p className="card-title text-danger font-weight-bold lead m-0 p-0">
                      R$ {produto.preco_final}
                    </p>
                  </div>
                </div>
              );
            } else if (produto.id_categoria == filtroId) {
              return (
                <div
                  key={produto.id_produto}
                  className={produto.id_categoria + ' card border-0 mx-2 mb-4'}
                  style={{ width: '200px', background: '#f7d0d0' }}
                >
                  <div className="card-img-top d-flex flex-column align-items-center m-0 p-0">
                    <img
                      className="mx-auto mt-3 mb-0"
                      src={produto.imagem}
                      alt={produto.categoria}
                      style={{ maxWidth: '170px', maxHeight: '170px' }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <p className="card-text m-0 p-0"> {produto.descricao} </p>
                    <hr className="w-100 p-0 my-1" />
                    <del className="card-title m-0 p-0">R$ {produto.preco}</del>
                    <p className="card-title text-danger font-weight-bold lead m-0 p-0">
                      R$ {produto.preco_final}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default Produtos;
