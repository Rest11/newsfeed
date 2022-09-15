import { Link } from "react-router-dom"
import { StyledComponent } from "../components/styles"

export const NotFoundPage = () => {

  return (
    <StyledComponent.HomePageWrapper>
    <p>Page not found. Go to the <Link to="/">Main page.</Link></p>
    </StyledComponent.HomePageWrapper>
  )
}