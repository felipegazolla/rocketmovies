import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"
import { Container, Profile } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarplaceholder from "../../assets/placeholder_img.svg"

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarplaceholder

  return (
    <Container>

      <h1>RocketMovies</h1>
      
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>

        <img src={avatarUrl} alt={user.name} />
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