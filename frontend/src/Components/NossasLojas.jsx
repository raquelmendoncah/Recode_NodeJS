import React from 'react';
import './estilo.css';

const NossasLojas = () => {
  return (
    <main className="container">
      <div className="d-flex align-items-end flex-column">
        <div className="container p-2 ">
          <div className="row d-flex flex-wrap justify-content-around">
            <div className="card border-danger m-3" style={{ width: '18rem' }}>
              <div class="card-header bg-transparent border-danger">
                <h3 className=" text-danger font-weight-bold">
                  Rio de Janeiro
                </h3>
              </div>

              <div className="card-body">
                <p>Avenida Presidente Vargas, 5.000</p>
                <p>10º andar</p>
                <p>Centro</p>
                <p>Tel: (21)3333-3333</p>
              </div>
              <div class="card-footer bg-transparent border-danger">
                <a className="btn btn-danger text-white">Fale conosco</a>
              </div>
            </div>
            <div className="card border-danger m-3" style={{ width: '18rem' }}>
              <div class="card-header bg-transparent border-danger">
                <h3 className=" text-danger font-weight-bold">São Paulo</h3>
              </div>

              <div className="card-body">
                <p>Avenida Paulista, 985</p>
                <p>3º andar</p>
                <p>Jardins</p>
                <p>Tel: (11)4444-4444</p>
              </div>
              <div class="card-footer bg-transparent border-danger">
                <a className="btn btn-danger text-white">Fale conosco</a>
              </div>
            </div>
            <div className="card border-danger m-3" style={{ width: '18rem' }}>
              <div class="card-header bg-transparent border-danger">
                <h3 className=" text-danger font-weight-bold">
                  Santa Catarina
                </h3>
              </div>

              <div className="card-body">
                <p>Rua Major Avila, 370</p>
                <p>Vila Mariana</p>
                <p>Tel: (47)5555-5555</p>
              </div>
              <div class="card-footer bg-transparent border-danger">
                <a className="btn btn-danger text-white">Fale conosco</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default NossasLojas;
