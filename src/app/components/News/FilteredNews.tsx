import { useParams } from "react-router-dom"



export const FilteredNews = () => {
const {tag} = useParams();
  return (
    <>
    <p>This is filtered news about {tag}</p>
    </>
  )
}