import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ProfileButton,
  PersonIcon,
  Logo,
  FavoriteButton,
  StarIcon,
  AccoountMenu,
  FavoriteMenu,
  ProfileContainer,
  FavoriteContainer,
  Content,
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
            <StarIcon  />
              Meus favoritos
            </FavoriteButton>
            <FavoriteMenu activeFavoriteMenu={activeFavoriteMenu}>
              <ul>
                <li>Comics Favoritas</li>
                <li>Characters Favoritos</li>
              </ul>
            </FavoriteMenu>
          </FavoriteContainer>

          <Link to="/">
            <Logo src={Marvel} />
          </Link>
          <ProfileContainer>
            <ProfileButton onClick={() => openAccountMenu()}>
              <PersonIcon />
            </ProfileButton>

            <AccoountMenu activeAccountMenu={activeAccountMenu}>
              <ul>
                <li>Editar conta</li>
                <li>Sair</li>
              </ul>
            </AccoountMenu>
          </ProfileContainer>
        </Content>
      </Container>
    </>
  );
};

export default Header;
