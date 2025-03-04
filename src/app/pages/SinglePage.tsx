import { Link, useNavigate, useParams } from "react-router-dom"
import { getNews } from "../components/reducer/newsreducer";
import { useSelector } from "react-redux"
import { StyledComponent } from "../components/styles";
import styled from "styled-components";
import { Button } from "@mui/material";

export const SinglePage = () => {
  const {id} = useParams();
  const news = useSelector(getNews);
  const navigate = useNavigate();
  const [filteredNews] = news.filter(news => (news.id === id));
  const goback = () => navigate(-1);
  return (
    <StyledComponent.HomePageWrapper>
      <StyledButton variant="outlined" onClick={goback}>Go Back</StyledButton>
     <StyledComponent.NewsTitle>{filteredNews.title}</StyledComponent.NewsTitle>
      {filteredNews.fullNews?.map((news: string) => <StyledComponent.NewsText>{news}</StyledComponent.NewsText>)}
     
     <StyledComponent.NewsFooter>
      <StyledComponent.NewsDate>Posted by <strong>{filteredNews.editedBy}</strong></StyledComponent.NewsDate>
      <StyledComponent.NewsDate>{filteredNews.dateOfWriting}</StyledComponent.NewsDate>
     </StyledComponent.NewsFooter>
     <Link to='edit' key={id}>Edit📃</Link>
    </StyledComponent.HomePageWrapper>
  )
}

const StyledButton = styled(Button)` &&{
  margin-top: 10px;
  text-decoration: none;
  border: 2px solid rgba(25, 118, 210, 0.5);
  }
  `