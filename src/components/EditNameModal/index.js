import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Input, CloseIcon, Button, CloseButton } from "./style";

const EditNameModal = ({openModal, closeModal, modalIsOpen}) => {
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
        <Form>
          <CloseButton>
            <CloseIcon onClick={closeModal}/>
          </CloseButton>
          <Input placeholder="Email" />
          <Button>Enviar</Button>
        </Form>
      </Modal>
    </>
  );
};

export default EditNameModal;
