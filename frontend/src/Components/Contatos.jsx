import React from 'react';
import './estilo.css';

function Contatos() {
  const [contato, setContato] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nome: '',
    msg: '',
  });

  React.useEffect(async () => {
    const url = 'http://localhost:3001/mensagens';
    const response = await fetch(url);
    setContato(await response.json());
  }, [render]);

  function enviarComentario(event) {
    event.preventDefault();
    const json = JSON.stringify(formData);

    const url = 'http://localhost:3001/mensagens';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    })
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      });
  }

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth();
    // const y = myDate.getFullYear();
    const h = myDate.getHours();
    const mi = myDate.getMinutes();

    return `[ ${d}/${mo} às ${h}:${mi} ]`;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="container m-5">
          <div className="row">
            <div className="col text-center">
              <img
                src="./Imagens/Email.jpeg"
                alt="email-logo"
                style={{ width: '50px' }}
              />
              <p> contato@fullstackeletro.com</p>
            </div>
            <div className="col text-center">
              <img
                src="./Imagens/Whatsapp.jpeg"
                alt="whats-logo"
                style={{ width: '50px' }}
              />
              <p> (11)99999-9999</p>
            </div>
          </div>
        </div>

        <form onSubmit={enviarComentario}>
          <div className="form-group">
            <h3>Mande seu feedback!!!</h3>
            <br />
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              className="form-control mb-3"
              name="nome"
              id="nome"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="msg">Mensagem:</label>
            <textarea
              className="form-control"
              name="msg"
              id="msg"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Enviar
          </button>
        </form>
        {msg && (
          <div className="alert alert-danger mx-auto mt-5 w-100" role="alert">
            Mensagem enviada com sucesso!
          </div>
        )}
      </div>
      <div
        className="container p-4 mt-5"
        style={{ background: '#f29898', borderRadius: '20px' }}
      >
        <h3 className="font-weight-bold">Comentários</h3>

        {contato.map((element) => {
          return (
            <div key={element.id}>
              <div className="row">
                <div className="col">
                  <div className="card border-0 mx-auto mt-4">
                    <div className="card-header border-0">
                      <small className="text-danger">
                        {element.nome} - {formatDate(element.data)}:
                      </small>
                    </div>

                    <div
                      className="card-body"
                      style={{ background: '#f3e4e4' }}
                    >
                      {element.msg}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Contatos;
