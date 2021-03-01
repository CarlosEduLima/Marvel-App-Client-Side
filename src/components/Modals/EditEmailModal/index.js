import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Input, CloseIcon, Button, CloseButton } from "./style";
import { toast } from "react-toastify";
import api from '../../../services/api'
const EditEmailModal = ({ closeModal, modalIsOpen }) => {
  const [email, setEmail] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
    };
    console.log(data);
    const response = await api.put(
      `/user-email/${localStorage.getItem("userId")}`,
      data
    );
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("email", email)
      toast.success(`Email atualizado`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModal()
    } else {
      toast.error(`Erro ao atualizar email`, {
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
          <h3>Novo email</h3>
          <CloseButton>
            <CloseIcon onClick={closeModal} />
          </CloseButton>
          <Input
            required
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit">Atualizar</Button>
        </Form>
      </Modal>
    </>
  );
};

export default EditEmailModal;
