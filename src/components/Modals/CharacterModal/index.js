import React from "react";
import {
  ModalContainer,
  ComicImg,
  DescriptionContainer,
  CreatorsContainer,
  CharactersContainer,
  CloseIcon,
  CloseButton,
} from "./style";
const ComicModal = ({closeModal}) => {
  return (
    <>
      <ModalContainer>
        <ComicImg>
          <img
            src={
              "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"
            }
          />
          <CloseButton onClick={closeModal}>
            <CloseIcon />
          </CloseButton>
        </ComicImg>
        <DescriptionContainer>
          <h4>Comic name</h4>
          <p>asdasdadsasdasdasdadsa</p>
          <span>13.80</span>
        </DescriptionContainer>
        <CreatorsContainer>
          <span>Creators</span>
          <ul>
            <li>Creator Name</li>
          </ul>
        </CreatorsContainer>
        <CharactersContainer>
          <span>Creators</span>
          <ul>
            <li>Creator Name</li>
          </ul>
        </CharactersContainer>
      </ModalContainer>
    </>
  );
};

export default ComicModal;
