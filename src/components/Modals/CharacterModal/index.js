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
              "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_xlarge.jpg"
            }
          />
          <CloseButton onClick={closeModal}>
            <CloseIcon />
          </CloseButton>
        </ComicImg>
        <DescriptionContainer>
          <h4>Character name</h4>
          <p>asdasdadsasdasdasdadsa</p>
        </DescriptionContainer>
        <CreatorsContainer>
          <span>Comics</span>
          <ul>
            <li>comic name</li>
          </ul>
        </CreatorsContainer>
        <CharactersContainer>
          <span>Series</span>
          <ul>
            <li>Series</li>
          </ul>
        </CharactersContainer>
      </ModalContainer>
    </>
  );
};

export default ComicModal;
