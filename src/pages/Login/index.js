import React, {useState} from 'react'
import api from '../../services/api'
import { toast } from "react-toastify";
import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  LinkButton,
} from "./style.js";

import Marvel from "../../assets/marvel.svg";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";

function Login({ history }) {
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log(data)
    const response = await api.post("/login", data);
    console.log(response)
    if (response.status === 200) {
      localStorage.setItem("userId", response.data.user.id)
      localStorage.setItem("email", response.data.user.email)
      localStorage.setItem("name", response.data.user.name)
      login(response.data.token);
      history.push("/");
    } else {
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
        <Button type="submit">Login</Button>
        <Link to="/sign-up">
          <LinkButton>Não tenho cadastro</LinkButton>
        </Link>
        <Link to="/forgot-password">
          <LinkButton>Esqueci Minha senha</LinkButton>
        </Link>
      </Form>
    </Container>
  );
}

export default Login;
