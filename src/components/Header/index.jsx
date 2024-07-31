import { FiSearch } from "react-icons/fi"
import { Input } from "../Input"
import { Container, Profile } from "./styles"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import avatarplaceholder from "../../assets/placeholder_img.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export function Header() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarplaceholder

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>

      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>

          <button
            type="button"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  )
}