import React from "react";
import Layout from "../../components/Layout";
import ComicCard from "../../components/ComicCard";
import CharacterCard from "../../components/CharacterCard";
import ProductSection from "../../components/ProductSection";
import { Container, Content } from "./style";
const Home = () => {
  return (
    <Layout>
      <Container>
          <ProductSection title="Quadrinhos" />
      </Container>
    </Layout>
  );
};

export default Home;
