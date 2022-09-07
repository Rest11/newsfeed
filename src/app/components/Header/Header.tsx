import { StyledComponent } from "../styles"
import Logo_1 from "../img/Logo_1.svg"

import { MenuGames } from "./Menu";
import { UserInfo } from "./UserInfo";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <StyledComponent.HeaderDiv>
      <StyledComponent.HeaderWrapper>
        <Link to="/">
        <StyledComponent.LogoImg src={Logo_1}/> </Link>
        <MenuGames/>  
        <UserInfo/>
      </StyledComponent.HeaderWrapper>      
    </StyledComponent.HeaderDiv>

    </>
  );
};