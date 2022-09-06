import { StyledComponent } from "../styles"
import Logo_1 from "../img/Logo_1.svg"

import { MenuGames } from "./Menu";
import { UserInfo } from "./UserInfo";

export const Header = () => {
  return (
    <>
    <StyledComponent.HeaderDiv>
      <StyledComponent.HeaderWrapper>
        <StyledComponent.LogoImg src={Logo_1}/>  
        <MenuGames/>  
        <UserInfo/>
      </StyledComponent.HeaderWrapper>      
    </StyledComponent.HeaderDiv>

    </>
  );
};