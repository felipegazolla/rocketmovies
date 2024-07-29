import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"
import { Container, Profile } from "./styles"
import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>

      <h1>RocketMovies</h1>
      
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      <Profile to="/profile">
        <div>
          <strong>Felipe Gazolla</strong>
        </div>

        <img src="https://github.com/felipegazolla.png" alt="Imagem do usuário" />
      </Profile>
          <button 
            type="button" 
            onClick={signOut} 
          >
            Sair
          </button>
    </Container>
  )
}