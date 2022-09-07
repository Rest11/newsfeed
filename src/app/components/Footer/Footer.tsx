import { Link } from "react-router-dom"
import { StyledComponent } from "../styles"

export const Footer = () => {

  return (
    <StyledComponent.Footer>
      <Link to="/about">
      <p>About US</p>
      </Link>
    </StyledComponent.Footer>
  )
}