import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"
import { Container, Profile } from "./styles"

export function Header() {
  return (
    <Container>

      <h1>RocketMovies</h1>
      
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      <Profile to="/profile">
        <div>
          <strong>Felipe Gazolla</strong>
          <a href="/">Sair</a>
        </div>

        <img src="https://github.com/felipegazolla.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  )
}