import { Container, Content, AddButton, App, Header } from "./styles"
import { Input } from "../../components/Input"
import { Profile } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Movie } from "../../components/Movie"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useNavigate } from "react-router"

export function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  const navigate = useNavigate()

  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarplaceholder

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])


  return (
    <>
      <Header>
        <h1>RocketMovies</h1>

        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
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
      </Header>
      <Container>
        <h1>Meus filmes</h1>
        <AddButton to="/new">
          <FiPlus />
          Adicionar filme
        </AddButton>
      </Container>
      <App>
        <Content>
          {
            movies.map(movie => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
        </Content>
      </App>
    </>
  )
}