import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  InfoContainer,
  EditIcon,
  EditInfoButton,
} from "./style.js";

function Login({ history }) {
  return (
    <Layout>
      <Container>
        <InfoContainer>
          <EditInfoButton>
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
