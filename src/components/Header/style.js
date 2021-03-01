import styled from "styled-components";
import { StarFill, Person } from "../../styles/icons";
export const Container = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  height: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  z-index:2;
`;
export const Content = styled.div`
  max-width: 990px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100%;
`;
export const ProfileButton = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  >svg{
    color: var(--dark)
  }
  &:hover {
    background: white;
    color: var(--primary);
  }
`;
export const FavoriteContainer = styled.div`
  position: relative;
`;
export const PersonIcon = styled(Person)`
  width: 25px;
  height: 25px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 60px;
  >svg{
    background: none
  }
`;

export const FavoriteButton = styled.button`
  width: 150px;
  color: #ffffff;
  font-weight: 500;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 30px;
  border-radius: 4px;
  transition: 0.5s;

  &:focus {
    outline: none;
  }
  &:hover {
    background: white;
    color: var(--primary);
  }
`;

export const StarIcon = styled(StarFill)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
    color: gold;

`;
export const AcountMenu = styled.div`
  background: var(--dark);
  width: 130px;
  height: 95px;
  border-radius: 0px 0px 4px 4px;
  top: 50px;
  right: -15px;
  padding: 5px;
  position: absolute;
  z-index: 2;
  opacity: 0;
  transition: 0.5s;
  ${({ activeAccountMenu }) =>
    activeAccountMenu &&
    `
    opacity: 1
  `}
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const FavoriteMenu  = styled.div`
    background: var(--dark);
    width: 180px;
    height: 95px;
    border-radius: 0px 0px 4px 4px;
    margin-left: 8px;
    padding: 5px;
    left: -15px;
    top: 50px;
    position: absolute;
    z-index: 2;
    opacity: 0;
    display: block;

  ${({ activeFavoriteMenu }) =>
    activeFavoriteMenu &&
    `
    opacity: 1
  `}
`;

export const FavoriteMenuButtons = styled.button`
 font-size: 16px;
  margin-top: 8px;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  font-weight: bold;
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;


export const AcountButtons = styled.button`
  font-size: 16px;
  margin-top: 8px;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  font-weight: bold;
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
