import React from 'react';
import Main from '../Main';
import { Container, Wrapper } from './styles';

const Layout = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  );
};

export default Layout;