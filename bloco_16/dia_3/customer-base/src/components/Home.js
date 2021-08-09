import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Olá, seja bem-vindo(a)</h1>
        <Link to="/login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;
