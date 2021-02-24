import {Container, Logo, Form, Input, Button, Footer, LinkButton} from './style.js'
import Marvel from '../../img/marvel_logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Container>
        <Logo src={Marvel}/>
        <Form>
          <Input  placeholder="Email" />
          <Input placeholder="Senha" />
          <Button>Login</Button>
              <span>Não possui cadastro?</span>
              <LinkButton>clique aqui</LinkButton>
        </Form>
    </Container>
  );
}

export default Login;
