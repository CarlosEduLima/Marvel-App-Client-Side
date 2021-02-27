import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ComicModal from '../ComicModal'
import {
  Container,
  ComicCover,
  InfoContainer,
  Title,
  Type,
  MoreInfoButton,
  ModalContainer,
  ComicImg,
  DescriptionContainer,
  CreatorsContainer,
  CharactersContainer,
  CloseIcon,
  CloseButton
} from "./style";
const ComicCard = () => {
  const customStyles = {
    content: {
      top: "",
      left: "",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: '300px',
      height: '100%',
      overflow: 'auto'
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
         <ComicModal closeModal={closeModal}/>
        </Modal>
        <ComicCover>
          <img
            src={
              "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg"
            }
          />
        </ComicCover>
        <InfoContainer>
          <Title>
            <h3>Comic Name</h3>
          </Title>
          <Type>
            <span>Comic type</span>
          </Type>
          <MoreInfoButton onClick={openModal}>More</MoreInfoButton>
        </InfoContainer>
      </Container>
    </>
  );
};

export default ComicCard;
