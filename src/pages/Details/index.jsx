import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft, FiClock, FiX } from "react-icons/fi"
import { Stars } from "../../components/Stars"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import avatarPlaveholder from "../../assets/placeholder_img.svg"
import { useAuth } from "../../hooks/auth"

export function Details() {
  const { user } = useAuth()

  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaveholder
  const [avatar, setAvatar] = useState(avatarUrl)

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja excluir o filme?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />

    {
      data &&
      <main>
        <Content>
          <div id="buttons">
            <ButtonText onClick={handleBack} icon={FiArrowLeft} title="Voltar" />
            <ButtonText id="remove" onClick={handleRemove} icon={FiX} title="Excluir nota" />
          </div>  

            <div id="title">
              <h1>{data.title}</h1>
              <Stars rating={data.rating}/>
            </div>
            <div id="description">

            <div id="user">
              <img src={avatar} alt="Imagem do usuário" />
              <p>Por {user.name}</p>
            </div>
            <div id="date">
              <FiClock />
              <p>{data.created_at}</p>
            </div>

            </div>

          {
            data.tags &&
              <Section>
                {
                  data.tags.map(tag => <Tag title={tag.name} key={tag.id} />)
                }
              </Section>
          }
          <p>
          {data.description}
          </p>

        </Content>
      </main>
    }
    
    </Container>
  )
}