import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Container, Form, Section, Addtags } from "./styles"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieMarker } from "../../components/Moviemarker"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import { ButtonText } from "../../components/ButtonText"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    if (newTag.trim() === "") {
      return alert("Digite a Tag para adicionar")
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Insira o título do Filme")
    }

    if(newTag) {
      return alert("Você esqueceu de adicionar uma Tag")
    }

    if(rating > 5 || rating < 1) {
      return alert("Insira a nota entra 1 e 5")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    })

    alert("Filme adicionado com sucesso")
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja excluir o filme?")

    if(confirm) {
      navigate("/")
    } else {

    }
  }

  return (
    <>
    <Container>
      <Header />
      <main>
        <Form>
          <header>
          <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleRemove}>
          </ButtonText>
          <h1>Novo filme</h1>
          </header>

          <Section>
            <Input 
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="number"
              onChange={e => setRating(e.target.value)}
            />
          </Section>
          
          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />
          
          <h2>Marcadores</h2>
          <Addtags>
            {
              tags.map((tag, index) => (
                <MovieMarker
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieMarker 
              isNew
              placeholder="Novo Marcador" 
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Addtags>

          <Section>
            <Button 
              title="Salvar alterações"
              onClick={handleNewMovie}
            />
          </Section>
        </Form>
      </main>
    </Container>
    </>
  )
}