import React from 'react'
import Layout from '../../components/Layout'
import ComicCard from '../../components/ComicCard'
import CharacterCard from '../../components/CharacterCard'
import {Container, CardItem} from './style'
const Home = () => {
  return (
    <Layout>
        <Container>
            <ul>
                <li><ComicCard /></li>
                
                <li> <CharacterCard /></li>
                
                <li> <CharacterCard /></li>
                
                <li> <CharacterCard /></li>
            </ul>
        </Container>
    </Layout>
  );
};

export default Home;
