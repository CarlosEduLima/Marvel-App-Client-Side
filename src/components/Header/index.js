import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth";
import {
  Container,
  ProfileButton,
  PersonIcon,
  Logo,
  FavoriteButton,
  StarIcon,
  AcountMenu,
  FavoriteMenu,
  ProfileContainer,
  FavoriteContainer,
  Content,
  AcountButtons,
  FavoriteMenuButtons,
} from "./style";
import Marvel from "../../assets/marvel.svg";

const Header = () => {
  const [activeAccountMenu, setActiveAccountMenu] = useState(false);
  const [wasClickedAccount, setWasClickedAccount] = useState(false);

  const [activeFavoriteMenu, setActiveFavoriteMenu] = useState(false);
  const [wasClickedFarorite, setWasClickedFavorite] = useState(false);

  const openAccountMenu = () => {
    if (wasClickedAccount) {
      setWasClickedAccount(false);
      setActiveAccountMenu(false);
    } else {
      setWasClickedAccount(true);
      setActiveAccountMenu(true);
    }
  };

  const openFavoriteMenu = () => {
    if (wasClickedFarorite) {
      setWasClickedFavorite(false);
      setActiveFavoriteMenu(false);
    } else {
      setWasClickedFavorite(true);
      setActiveFavoriteMenu(true);
    }
  };
  return (
    <>
      <Container>
        <Content>
          <FavoriteContainer>
            <FavoriteButton onClick={() => openFavoriteMenu()}>
              <StarIcon />
              Meus favoritos
            </FavoriteButton>
            <FavoriteMenu activeFavoriteMenu={activeFavoriteMenu}>
              <FavoriteMenuButtons>Comics Favoritas</FavoriteMenuButtons>
              <FavoriteMenuButtons>Characters Favoritos</FavoriteMenuButtons>
            </FavoriteMenu>
          </FavoriteContainer>

          <Link to="/">
            <Logo src={Marvel} />
          </Link>
          <ProfileContainer>
            <ProfileButton onClick={() => openAccountMenu()}>
              <PersonIcon />
            </ProfileButton>

            <AcountMenu activeAccountMenu={activeAccountMenu}>
              <Link to="/edit-info">
                <AcountButtons>Editar Conta</AcountButtons>
              </Link>
              <Link to="/login">
                <AcountButtons onClick={() => logout()}>Sair</AcountButtons>
              </Link>
            </AcountMenu>
          </ProfileContainer>
        </Content>
      </Container>
    </>
  );
};

export default Header;
