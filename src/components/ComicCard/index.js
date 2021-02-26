import React from 'react';
import Layout from '../../components/Layout';
import {Container, ComicCover, InfoContainer, Title, Type, MoreInfoButton} from './style'
const ComicCard = () => {
  return (
    <Container>
        <ComicCover>
            <img src={'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg'}/>
            </ComicCover>
        <InfoContainer>
            <Title>
                <h3>Comic Name</h3>
            </Title>
            <Type>
                <span>Comic type</span>
            </Type>
            <MoreInfoButton>More</MoreInfoButton>
        </InfoContainer>
    </Container>
  )
};

export default ComicCard;
