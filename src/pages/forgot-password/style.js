import styled from "styled-components";
import { CloseOutline } from "../../styles/icons";
export const Container = styled.div`
  height: 100vh;
    width: 100vw;
    margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ED1B24;
`;


export const Wrapper = styled.div`
    max-width: 400px;
    width: 400px;
    margin: 0 auto;
    padding: 0;
    background-color: var(--white);
    height: 400px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
  height: 100%;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  > h3 {
    font-size: 20px;
    color: var(--primary);
    margin: 1em;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  height: 45px;
  font-size: 14px;
  color: palevioletred;
  background: #f5f5f5;
  border-radius: 3px;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  height: 45px;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-weight: bold;
  background-color: #ee1b24;
  color: #ffffff;
  cursor: pointer;
  &:focus {
    outline: none;
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
  width: 20px;
  height: 20px;
`;
