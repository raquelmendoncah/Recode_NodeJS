import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Produtos from './Produtos';
import NossasLojas from './NossasLojas';
import Contatos from './Contatos';
import './Nav.css';

const Nav = () => {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center"
        style={{ backgroundColor: 'red' }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="./Imagens/Full Stack Eletro.jpeg"
              alt="Logo"
              style={{ height: '50px' }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <div className="navbar-nav mr-auto">
              <Link className="nav-link text-white active mr-5" to="/Produtos">
                Produtos
              </Link>
              <Link
                className="nav-link text-white active mr-5"
                to="/NossasLojas"
              >
                Lojas
              </Link>
              <Link className="nav-link text-white active mr-5" to="/Contatos">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Produtos" component={Produtos} />
        <Route path="/NossasLojas" component={NossasLojas} />
        <Route path="/Contatos" component={Contatos} />
      </Switch>
    </BrowserRouter>
  );
};

export default Nav;
