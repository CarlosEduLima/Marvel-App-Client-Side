import React from 'react';
import { Container, Wrapper, Header, Footer } from './styles';

const Layout = ({children}) => {
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
