import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getNews } from "../reducer/newsreducer"
import { StyledComponent } from "../styles"


export const BigNews = () => {
  const listOfNews = useSelector(getNews);
  return (
    // {newslist.map( (news: any) => (
    <StyledComponent.BigNewsWrapper>
      {listOfNews.map((news) => 
      (<Link  key={news.id} to={`/news/${news.id}`}>
              <StyledComponent.NewsBig key={news.id}>

              <img src = { news.imageURL } alt = ""/>
              <p>{news.title}</p>
            </StyledComponent.NewsBig>
        </Link>
      ))}
    </StyledComponent.BigNewsWrapper>

  )
}