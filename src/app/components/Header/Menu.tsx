import { StyledComponent } from "../styles"
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import { White } from '@mui/material/colors';
import { Type } from "typescript";
import { Link } from "react-router-dom";

export const MenuGames =() => {

  return (
    <StyledComponent.MenuDiv>
      {/* <img src={ComputerIcon} alt="Comp"></img> */}
      <StyledComponent.CompGames>
        <ComputerIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        ></ComputerIcon>
        <Link to="/news">
          <p>PC Games</p></Link>
      </StyledComponent.CompGames>

      <StyledComponent.PsGames>
        <SportsEsportsIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        >       
        </SportsEsportsIcon>
        <p>Console Games</p>
      </StyledComponent.PsGames>

      <StyledComponent.MobileGames>
        <PhoneIphoneIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        >       
        </PhoneIphoneIcon>
        <p>Mobile Games</p>
      </StyledComponent.MobileGames>
    </StyledComponent.MenuDiv>
  );
}