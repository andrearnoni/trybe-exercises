// src/Login.js
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/customerActions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    return (
      <div>
        <form>
          <div>
            <label htmlFor="email" />Login
            <input
              type="email"
              name="email"
              id="email"
              onChange={ this.handleChange }
              placeholder="email"
            />
          </div>
          <div>
            <label htmlFor="password" />Senha
            <input
              type="password"
              name="password"
              id="password"
              onChange={ this.handleChange }
              placeholder="senha"
            />
          </div>
        </form>
        <button>
          <Link
            to="/clients"
            onClick={() => login({ email, password })}>
            Entrar
          </Link>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (loginData) => dispatch(login(loginData))
});

export default connect(null, mapDispatchToProps)(Login);