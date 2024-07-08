import { Container, Profile } from "./styles"

export function Header() {
  return (
    <Container>
      <Profile>
        <div>
          <strong>Felipe Gazolla</strong>
          <a href="/">Sair</a>
        </div>

        <img src="https://github.com/felipegazolla.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  )
}