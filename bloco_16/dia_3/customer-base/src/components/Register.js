import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions/customerActions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validateRegister = this.validateRegister.bind(this);

    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister() {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  handleChange({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;

    if (!userLogin.email) {
      <h2>Login não efetuado!</h2>
    }

    return (
      <div>
        <form>
          <div>
            <label htmlFor="name" />Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              value={name}
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <label htmlFor="age" />Idade
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Idade"
              value={age}
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <label htmlFor="email" />Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={ this.handleChange }
            />
          </div>
        </form>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userLogin: state.log.loginData
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: (registerData) => dispatch(addRegister(registerData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);