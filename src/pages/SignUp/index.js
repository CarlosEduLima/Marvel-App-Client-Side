import React, { useState } from "react";
import { Container, Logo, Form, Input, Button } from "./style.js";
import Marvel from "../../assets/marvel.svg";
import api from "../../services/api";
import { toast } from "react-toastify";
function SignUp({ history }) {
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    const response = await api.post("/sign-up", data);
    if (response.status === 200) {
      toast.success("Cadastro realizado com sucesso", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }else{
      toast.error(`Erro ao realizar cadastro`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <Container>
      <Logo src={Marvel} />
      <Form onSubmit={handleSubmit}>
        <h3>Cadastre-se</h3>
        <Input
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
        />
        <Input
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Email"
        />
        <Input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          required
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}

export default SignUp;
