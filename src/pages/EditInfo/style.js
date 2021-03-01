import styled from "styled-components";
import { Edit } from "../../styles/icons";
export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  padding: 10px;
  height: 340px;
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  > span {
    font-size: 14px;
    color: var(--secondary);
  }
`;

export const EditInfoButton = styled.button`
  font-size: 1em;
  margin: 1.2em;
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
`;

export const UserName = styled.div`
  > span {
    font-size: 18px;
    color: #000000;
    margin: 1em;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const UserEmail = styled.div`
  > span {
    font-size: 18px;
    color: #000000;
    margin: 1em;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const EditIcon = styled(Edit)`
  width: 20px;
  right: 0;
  height: 20px;
  margin-left: 10px;
`;
