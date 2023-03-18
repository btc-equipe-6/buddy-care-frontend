import { Component } from 'react';
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from 'reactstrap';
import './App.css';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
 
    this.setState({
      [name]: value,
    });
  };
 
  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    const { validate } = this.state;
 
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success';
    } else {
      validate.emailState = 'has-danger';
    }
 
    this.setState({ validate });
  }
 
  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }
 
  render() {
    const { email, password } = this.state;
 
    return (
      <div className="App">
        <h2 class="title">Login</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <FormGroup>
            <Label>Nome de usuário</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e);
              } } />
            <FormFeedback>
              Parece que há um problema com seu e-mail. Por favor, verifique se está correto.
            </FormFeedback>
            <FormFeedback valid>
              Muito bem, email corretamente informado.
            </FormFeedback>
            <FormText>Seu nome de usuário provavelmente é seu e-mail.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={(e) => this.handleChange(e)} />
          </FormGroup> <br />
          <Button>Enviar</Button>
        </Form>
        <p class="text-center">Ainda não é um membro? <a data-toggle="tab" href="formulario.html">Cadastre-se</a></p>
      </div>
    );
  }
}

export default App;
