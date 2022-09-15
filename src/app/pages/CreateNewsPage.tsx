import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addNews} from "../components/reducer/newsreducer";
import { getUser } from "../components/reducer/userreducer";
import { Box, Button, Checkbox, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const CreateNewsPage = () =>{

  const listOfUsers = useSelector(getUser);
  const [currentUser] = listOfUsers.filter(user => (!!user.isLogged));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateNews = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newDate = new Date().toLocaleDateString('En-US',
    { 
      weekday: 'long',
      year   : 'numeric',
      month  : 'long',
      day    : '2-digit',
      hour   : 'numeric',
      minute : 'numeric'
     });
    const editedNews = {
      title: data.get('title'),
      imageURL: data.get('imageurl'),
      fullNews: [data.get('fullNews')],
      isBigNews: data.get('OnMainpage')? true : false,  
      dateOfWriting: `${newDate}`,   
      tag: data.get('radio-buttons-group'),
      editedBy: `${currentUser.userName} ${currentUser.userSurname}`,
    }
    dispatch(addNews(editedNews))
    navigate('/news/sort/all')
  }
  return (
    
    <AddPageWrapper>
      {(!!currentUser?.isAdmin? 
    <>
    <TitleComponent>New news</TitleComponent>
    <Box component="form" noValidate  onSubmit={validateNews} sx={{ width: 500, maxWidth: '100%' }}>
        <TextField
          id="title"
          name="title"
          label="Title of news"
          helperText="edit title of news"
          variant="standard"
          fullWidth
          multiline
        />
                <TextField
          id="imageURL"
          label="Image"
          maxRows={2}
          name="imageurl"
          helperText="edit image of news"
          variant="standard"
          fullWidth
          multiline
        /> 
        <TextField
          id="fullNews"
          label="Text of News"
          name="fullNews"
          helperText="edit text of news"
          variant="standard"
          style={{width: 1300}}
          multiline
          maxRows={10}
        /> 
        <FormControlLabel
                  control={<Checkbox value="true" color="primary" name="OnMainpage" />}
                  label="Allow news be on a main page"
                />
        <RadioGroup
          row
          aria-labelledby="RadioButtons"
          defaultValue="PC"
          name="radio-buttons-group"
        >
          <FormControlLabel value="PC" control={<Radio />} label="PC News" />
          <FormControlLabel value="Console" control={<Radio />} label="Console News" />
          <FormControlLabel value="Mobile" control={<Radio />} label="Mobile News" />
        </RadioGroup>
         <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>       
    </Box>
    </> : 
    <span>
      <p>You don't have permission for this. Please <Link to="/login"> login</Link> to continue</p>
      
      </span>)}
    </AddPageWrapper>
  )
}

const TitleComponent = styled.h1`
margin-top: 20px;
margin-bottom: 20px;
`
const AddPageWrapper = styled.div`
width: 70%;
margin: auto;
overflow: auto;

`