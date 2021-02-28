import {
    Container,
    Logo,
    Form,
    Input,
    Button,
    Footer,
    LinkButton,
  } from "./style.js";
  import Marvel from "../../assets/marvel.svg";
  import { Link } from "react-router-dom";
  import { login } from "../../services/auth";
  
  function SignUp({ history }) {
    function handleSubmit() {
        console.log('i was called')
        history.push("/login");
      }
  
    return (
      <Container>
        <Logo src={Marvel} />
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button onClick={() => handleSubmit()}>Sign up</Button>
        </Form>
      </Container>
    );
  }
  
  export default SignUp;
  