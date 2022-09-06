import { useEffect, useState } from "react"
import { StyledComponent } from "../styles"
import { newslist } from "./newslist"

export const BigNews = () => {
  // const [news, setNews] = useState([])
  // // newslist.map(post => setnews([]))
  // // console.log(typeof(post))
  // useEffect(() => setNews(newslist),[])
  const newNewsList = [...newslist];

  // console.log(news)
  return (
    // {newslist.map( (news: any) => (
    <StyledComponent.BigNewsWrapper>
      {newslist.map((news) => (
              <StyledComponent.NewsBig>

              <img src = { news.imageURL } alt = ""/>
              <p>{news.title}</p>
            </StyledComponent.NewsBig>
      ))}
    </StyledComponent.BigNewsWrapper>

  )
}