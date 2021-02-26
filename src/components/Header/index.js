import React from "react";
import {
  Container,
  Wrapper,
  ProfileButton,
  PersonIcon,
  Logo,
  FavoriteButton,
  StarIcon,
} from "./style";
import Marvel from "../../assets/marvel_logo.png";

const Header = () => {
  return (
    <Container>
      <FavoriteButton>
        Favoritos
        <StarIcon />
      </FavoriteButton>
      <Logo src={Marvel} />
      <ProfileButton>
        <PersonIcon />
      </ProfileButton>
    </Container>
  );
};

export default Header;
