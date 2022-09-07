import { StyledComponent } from "../styles"
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";

export const UserInfo = () => {
  return (
    <StyledComponent.UserDiv>
      <Link to="/login">
      <Person2Icon
      sx={{fontSize: 40, color: 'white', margin: 'auto', display: 'block'}}
      >           
      </Person2Icon>
      <p>Log In</p>   
      </Link>
    </StyledComponent.UserDiv>
  )
}