import React, {useState} from 'react'
import { Container, Logo, Form, Input, Button, LinkButton } from "./style.js";
import Marvel from "../../assets/marvel_logo.png";


function ResetPassword({ history }) {
  const [checkedEmail, setCheckedEmail] = useState(false);
  const handleForm = () => {
    setCheckedEmail(true);
  };
  const handleSubmit = () => {
    setCheckedEmail(false);
  };
  return !checkedEmail ? (
    <Container>
      <Logo src={Marvel} />
      <Form>
        <Input placeholder="Email" />
        <Button onClick={() => handleForm()}>Enviar</Button>
      </Form>
    </Container>
  ) : (
    <Container>
      <Logo src={Marvel} />
      <Form>
        <Input placeholder="Nova Senha" />
        <Input placeholder="Confirmar nova senha" />
        <Button onClick={() => handleSubmit()}>Redefinir</Button>
      </Form>
    </Container>
  );
}

export default ResetPassword;
