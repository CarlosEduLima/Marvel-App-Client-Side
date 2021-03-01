import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Input, CloseIcon, Button, CloseButton, Container, Wrapper } from "./style";
import { toast } from "react-toastify";
import api from "../../services/api";
const ForgotPassword = ({ closeModal, modalIsOpen }) => {
  const [email, setEmail] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      newPassword: newPassword,
    };
    console.log(data);
    const response = await api.put(
      `/forgot-password`,
      data
    );
    console.log(response);
    if (response.status === 200) {
      toast.success(`Senha atualizada`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModal();
    } else {
      toast.error(`Erro ao atualizar senha`, {
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
     <Wrapper>
     <Form onSubmit={handleSubmit}>
          <h3>Nova senha</h3>
          <CloseButton>
            <CloseIcon onClick={closeModal} />
          </CloseButton>
          <Input
            placeholder="Sua senha"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Nova senha"
            required
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <Button type="submit">Atualizar</Button>
        </Form>
     </Wrapper>
   </Container>
        
  );
};

export default ForgotPassword;
