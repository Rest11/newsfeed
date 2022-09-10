import { Link } from "react-router-dom"
import { CustomLink } from "../CustomLink"
import { StyledComponent } from "../styles"

export const Footer = () => {

  return (
    <StyledComponent.Footer>

      <CustomLink to="/about">
      About US
      </CustomLink>
      <StyledComponent.CompanyName>
      <p>2022 &copy; TechFabric</p>
      </StyledComponent.CompanyName>

    </StyledComponent.Footer>
  )
}