import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { getUser, loggedUser } from '../components/reducer/userreducer';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { color } from '@mui/system';

export const LoginPage = () =>{
  const listOfUsers = useSelector(getUser);
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState('');
  const [loginUserDirty, setLoginUserDirty] = useState(false);
  const [loginUserError, setLoginUserError] = useState('')


  const handleUser = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const currentUser = {
      login: form.login.value, 
      password: form.password.value,
    }
    const filteredUser = listOfUsers.find(user => user.login === currentUser.login);
       
    if (currentUser.password === filteredUser?.password) {
      if (filteredUser?.isLogged === false) {
        const someUser = {...filteredUser};
        someUser.isLogged = true;
        console.log('filtered',someUser); 
        dispatch(loggedUser(someUser));
      }
      
      setLoginUserError('')
    } else {
      setLoginUserError('Такого логина не существует')
    }
    console.log(listOfUsers);
  }
  
  // const loginHandle = (event: any) => {
  //   setLoginUser(event.target.value);
  //   if (!listOfUsers.find(user => user.login == loginUser)) {
  //     setLoginUserError('Такого логина не существует')
  //     console.log('Ytn')
  //   } else {
  //     setLoginUserError('')
  //   }
  // }

  return (

    <CssVarsProvider>
      <Sheet   sx={{
        maxWidth: 400,
        mx: 'auto', // margin left & right
        my: 4, // margin top & botom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
        </div>
        {(!!loginUserError) && 
        <div style = {{color: 'red'}}><Typography level="body2">{loginUserError}</Typography></div>}
        <form onSubmit={handleUser}>
          
        <TextField
    // html input attribute
          name="login"
          type="text"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Login"
          required
        />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          required
        />
        <Button
          type="submit"
          sx={{
            mt: 1, // margin top
          }}
          >
          Log in
        </Button>
        </form>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don't have an account?
        </Typography>
        
       </Sheet>
    </CssVarsProvider>

  )
}