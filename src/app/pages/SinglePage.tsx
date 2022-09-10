import { useParams } from "react-router-dom"
import { getNews } from "../components/reducer/newsreducer";
import { useSelector } from "react-redux"
import { StyledComponent } from "../components/styles";

export const SinglePage = () => {
  const {id} = useParams();
  const news = useSelector(getNews);
  const [filteredNews] = news.filter(news => (news.id === Number(id)));
  const dateOfNews2 = filteredNews.dateOfWriting.
  toLocaleDateString('En-US',
  { 
    weekday: 'long',
    year   : 'numeric',
    month  : 'long',
    day    : '2-digit',
    hour   : 'numeric',
    minute : 'numeric'
   });

  return (
    <StyledComponent.HomePageWrapper>
     <StyledComponent.NewsTitle>{filteredNews.title}</StyledComponent.NewsTitle>
     <StyledComponent.NewsText>{filteredNews.fullNews}</StyledComponent.NewsText>
     <StyledComponent.NewsFooter>
      <StyledComponent.NewsDate>Posted by <strong>{filteredNews.editedBy}</strong></StyledComponent.NewsDate>
      <StyledComponent.NewsDate>{dateOfNews2}</StyledComponent.NewsDate>
     </StyledComponent.NewsFooter>
    </StyledComponent.HomePageWrapper>
  )
}