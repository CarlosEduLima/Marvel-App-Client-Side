import styled from "styled-components";
import { Star, Person } from "../../styles/icons";
export const Container = styled.div`
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  background-color: #3c4858;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 60px;
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

export const PersonIcon = styled(Person)`
  width: 25px;
  height: 25px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 50px;
`;

export const FavoriteButton = styled.button`
  width: 100px;
  background: #f5f5f5;
  display: initial;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  height: 30px;
  color: black;
  border-radius: 4px;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;
export const AccoountMenu = styled.div`
    background: #f5f5f5;
    width: 130px;
    height: 95px;
    border-radius: 0px 0px 4px 4px;
    margin-left: 8px;
    padding: 5px;
    float: right;
    position: relative;
    z-index: 2;
    opacity: 0;

    >ul{
        list-style:none
    }
    >ul, li{
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

export const FavoriteMenu = styled.div`
    background: #f5f5f5;
    width: 180px;
    height: 95px;
    border-radius: 0px 0px 4px 4px;
    margin-left: 8px;
    padding: 5px;
    float: left;
    position: relative;
    z-index: 2;
    opacity: 0;

    >ul{
        list-style:none
    }
    >ul, li{
        font-size: 18px;
    color: #000000;
    margin-bottom: 15px;
    }

  ${({  activeFavoriteMenu }) =>
     activeFavoriteMenu &&
    `
    opacity: 1
  `}
`;
