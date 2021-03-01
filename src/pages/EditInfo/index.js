import React, { useState } from "react";
import Layout from "../../components/Layout";
import EditNameModal from "../../components/Modals/EditNameModal"
import EditEmailModal from '../../components/Modals/EditEmailModal'
import EditPasswordModal from '../../components/Modals/EditPasswordModal'
import {
  Container,
  InfoContainer,
  EditIcon,
  EditInfoButton,
  UserName,
  UserEmail
} from "./style.js";

function Login({ history }) {
  const [editNameModalIsOpen, seteditNameModalOpen] = useState(false);
  function openeditNameModal() {
   seteditNameModalOpen(true);
  }

  function closeeditNameModal() {
   seteditNameModalOpen(false);
  }

  const [editEmailModalIsOpen, seteditEmailModalOpen] = useState(false);
  function openeditEmailModal() {
   seteditEmailModalOpen(true);
  }

  function closeeditEmailModal() {
   seteditEmailModalOpen(false);
  }

  const [editPasswordModalIsOpen, seteditPasswordModalOpen] = useState(false);
  function openeditPasswordModal() {
   seteditPasswordModalOpen(true);
  }

  function closeeditPasswordModal() {
   seteditPasswordModalOpen(false);
  }
  return (
    <Layout>
      <Container>
        <InfoContainer>
          <EditNameModal
            openModal={openeditNameModal}
            closeModal={closeeditNameModal}
            modalIsOpen={editNameModalIsOpen}
          />
           <EditEmailModal
            openModal={openeditEmailModal}
            closeModal={closeeditEmailModal}
            modalIsOpen={editEmailModalIsOpen}
          />
          <EditPasswordModal
            openModal={openeditPasswordModal}
            closeModal={closeeditPasswordModal}
            modalIsOpen={editPasswordModalIsOpen}
          />
          <UserName>
            <span>{localStorage.getItem("name")}</span>
          </UserName>
          <EditInfoButton onClick={openeditNameModal}>
            Atualizar nome
            <EditIcon />
          </EditInfoButton>
          <UserEmail>
            <span>{localStorage.getItem("email")}</span>
          </UserEmail>
          <EditInfoButton onClick={openeditEmailModal}>
            Atualizar email
            <EditIcon />
          </EditInfoButton>
        
            <EditInfoButton onClick={openeditPasswordModal}>
              Atualizar Senha
              <EditIcon />
            </EditInfoButton>
        </InfoContainer>
      </Container>
    </Layout>
  );
}

export default Login;
