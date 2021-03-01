import React from 'react';

import { Container, ContainerModal, Content, ContainerFooter, Footer, Title, Subtitle } from './styles';

export default function ProductCard({data}) {
  console.log(data)
  return (
    <Container>
      <img src={data.thumbnail? data.thumbnail.path + '/portrait_uncanny.jpg':'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg' } alt="Sanduíche" />
      <ContainerModal>
        <Content>
          <img src={data.thumbnail?data.thumbnail.path + '/portrait_uncanny.jpg': 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg'} alt="Sanduíche" />
          <ContainerFooter>
            <Footer>
              <Title>{data.title}</Title>
              {/*<Subtitle>Author</Subtitle>
              <span>Lançado em 2008</span>*/}
            </Footer>
          </ContainerFooter>
        </Content>
      </ContainerModal>
    </Container>
  );
}