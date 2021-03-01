import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Input, CloseIcon, Button, CloseButton } from "./style";
import { toast } from "react-toastify";
import api from "../../../services/api";
const EditPasswordModal = ({ closeModal, modalIsOpen }) => {
  const [oldPassword, setOldPassword] = useState([]);
  const [newPassword, setNewPassword] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    console.log(data);
    const response = await api.put(
      `/reset-password/${localStorage.getItem("userId")}`,
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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: "300px",
      height: "300px",
      overflow: "auto",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form onSubmit={handleSubmit}>
          <h3>Nova senha</h3>
          <CloseButton>
            <CloseIcon onClick={closeModal} />
          </CloseButton>
          <Input
            placeholder="Sua senha"
            required
            onChange={(event) => setOldPassword(event.target.value)}
          />
          <Input
            placeholder="Nova senha"
            required
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <Button type="submit">Atualizar</Button>
        </Form>
      </Modal>
    </>
  );
};

export default EditPasswordModal;
