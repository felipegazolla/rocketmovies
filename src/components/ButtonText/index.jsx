import { Container } from "./styles"

export function ButtonText({ icon: Icon, isActive = false, title, ...rest }) {
  return (
    <Container type="button" {...rest} $isactive={isActive.toString()} >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}