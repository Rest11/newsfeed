import { StyledComponent } from "../styles"
import ComputerIcon from '@mui/icons-material/Computer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import { CustomLink } from "../CustomLink";

export const MenuGames =() => {

  return (
    <StyledComponent.MenuDiv>
      <StyledComponent.CompGames>
        <ComputerIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        ></ComputerIcon>
        <CustomLink to="/news/sort/PC" key={'PC'}>
          PC News</CustomLink>
      </StyledComponent.CompGames>

      <StyledComponent.PsGames>
        <SportsEsportsIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        >       
        </SportsEsportsIcon>
        <CustomLink to="/news/sort/console" key={'console'}>
          Console News</CustomLink>
      </StyledComponent.PsGames>

      <StyledComponent.MobileGames>
        <PhoneIphoneIcon
        sx={{ fontSize: 40, color: 'white', margin: 'auto', display: 'block' }}
        >       
        </PhoneIphoneIcon>
        <CustomLink to="/news/sort/mobile" key={'mobile'}>
          Mobile News</CustomLink>
      </StyledComponent.MobileGames>
    </StyledComponent.MenuDiv>
  );
}