import React from "react";
import ComicSection from "../../components/ComicSection";

import Layout from "../../components/Layout";
import {
  Container,
  Content,
  ContainerImage,
  Image,
  ContainerInfo,
  Title,
  Description,
} from "./styles";

function Comic() {
  return (
    <Layout>
      <Container>
        <Content>
          <ContainerImage>
            <Image src="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_uncanny.jpg" />
          </ContainerImage>
          <ContainerInfo>
            <Title>Diabo azul</Title>
            <Description>
              Pior personagem da marvel, ninguém conhece
            </Description>
          </ContainerInfo>
        </Content>
        <ComicSection title="Quadrinhos em que esteve presente" />
      </Container>
    </Layout>
  );
}

export default Comic;
