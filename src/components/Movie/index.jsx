import { Container } from "./styles"
import { Tag } from "../Tag"
import { Stars } from "../Stars"

export function Movie({ data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars rating={data.rating}/>
      <p>{data.description}</p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag title={tag.name} key={tag.id} />)
          }
        </footer>
      }
    </Container>
  )
}