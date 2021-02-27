import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import EditNameModal from "../../components/EditNameModal";
import {
  Container,
  InfoContainer,
  EditIcon,
  EditInfoButton,
} from "./style.js";

function Login({ history }) {
  const [editNameModalIsOpen, seteditNameModalOpen] = useState(false);
  function openeditNameModal() {
   seteditNameModalOpen(true);
  }

  function closeeditNameModal() {
   seteditNameModalOpen(false);
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
          <EditInfoButton onClick={openeditNameModal}>
            Edit Name
            <EditIcon />
          </EditInfoButton>
          <EditInfoButton>
            Edit Email
            <EditIcon />
          </EditInfoButton>
          <Link to="/reset-password">
            <EditInfoButton>
              Edit Password
              <EditIcon />
            </EditInfoButton>
          </Link>
        </InfoContainer>
      </Container>
    </Layout>
  );
}

export default Login;
