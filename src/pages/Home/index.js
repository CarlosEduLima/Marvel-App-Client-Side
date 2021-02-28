import React from "react";
import Layout from "../../components/Layout";
import ComicCard from "../../components/ComicCard";
import CharacterCard from "../../components/CharacterCard";
import ComicSection from "../../components/ComicSection";
import { Container, Content } from "./style";
const Home = () => {
  return (
    <Layout>
      <Container>
          <ComicSection title="Quadrinhos" />
      </Container>
    </Layout>
  );
};

export default Home;
