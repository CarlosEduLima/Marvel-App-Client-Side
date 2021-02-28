import styled from "styled-components";
import { CloseOutline } from "../../../styles/icons";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
export const ComicImg = styled.div`
  > img {
    width: 220px;
    height: 230px;
    border-radius: 50%;
    top: 0;
  }

  width: 100%;
  height: 290px;
  padding: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(238, 27, 36);
  background: linear-gradient(
    0deg,
    rgba(238, 27, 36, 1) 0%,
    rgba(2, 0, 36, 1) 100%
  );
`;
export const DescriptionContainer = styled.div`
  background: #ffffff;
  margin-top: 15px;
  padding: 0 5px;
  > h4 {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
  > p {
    color: #000000;
    font-size: 14px;
  }
  > span {
    color: #000000;
    font-size: 14px;
  }
`;
export const CreatorsContainer = styled.div`
  margin-top: 15px;
  padding: 0 5px;
  > span {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
  > ul {
    list-style: none;
  }
  > li {
    color: #000000;
    font-size: 14px;
  }
`;
export const CharactersContainer = styled.div`
  margin-top: 15px;
  padding: 0 5px;
  > span {
    color: #000000;
    font-size: 16px;
    font-weight: bold;
  }
  > ul {
    list-style: none;
  }
  > li {
    color: #000000;
    font-size: 14px;
  }
`;
export const CloseButton = styled.button`
  background: none;
  border: none;
  top: 0;
  right: 0;
  position: absolute;
`;

export const CloseIcon = styled(CloseOutline)`
  width: 50px;
  height: 50px;
`;
