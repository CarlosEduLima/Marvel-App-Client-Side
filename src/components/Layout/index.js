import React from "react";
import { Container, Wrapper } from "./style";
import Header from "../Header";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
