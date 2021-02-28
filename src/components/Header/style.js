import styled from "styled-components";
import { StarFill, Person } from "../../styles/icons";
export const Container = styled.div`
  width: 100%;
  background-color: var(--primary);
  display: flex;
  height: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const Content = styled.div`
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 100%;
`;
export const ProfileButton = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
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
  margin-right: 50px;
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
    svg {
      color: var(--primary);
    }
  }
`;

export const StarIcon = styled(StarFill)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #000000;
`;
export const AccoountMenu = styled.div`
  background: #f5f5f5;
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
  > ul {
    list-style: none;
  }
  > ul,
  li {
    font-size: 18px;
    color: #000000;
    margin-bottom: 15px;
  }

  ${({ activeAccountMenu }) =>
    activeAccountMenu &&
    `
    opacity: 1
  `}
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const FavoriteMenu = styled.div`
  background: #f5f5f5;
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

  > ul {
    list-style: none;
  }
  > ul,
  li {
    font-size: 18px;
    color: #000000;
    margin-bottom: 15px;
  }

  ${({ activeFavoriteMenu }) =>
    activeFavoriteMenu &&
    `
    opacity: 1
  `}
`;
