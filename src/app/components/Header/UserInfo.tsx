import { StyledComponent } from "../styles"
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from "react-router-dom";
import { CustomLink } from "../CustomLink";
import { useSelector } from "react-redux";
import { getUser, loggedUser } from "../reducer/userreducer";

export const UserInfo = () => {
  const listOfUsers = useSelector(getUser);
  const [currentUser] = listOfUsers.filter(user => (!!user.isLogged));  
  return (
    <StyledComponent.UserDiv>
      <Link to="/login">
      <Person2Icon
      sx={{fontSize: 40, color: 'white', margin: 'auto', display: 'block'}}
      >           
      </Person2Icon>
      </Link>
      {!!currentUser ? (<CustomLink to="/">{[currentUser.userName,' ',currentUser.userSurname]}</CustomLink>) : 
      (<CustomLink to="/login">Log In</CustomLink>)}  
      
    </StyledComponent.UserDiv>
  )
}