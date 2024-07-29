import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Container, Form, Section, Addtags } from "./styles"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieMarker } from "../../components/Moviemarker"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

export function New() {
  const [tags, setTags] =useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    if (newTag.trim() === "") {
      return alert("Digite a Tag")
    }

    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <>
    <Container>
      <Header />
      <main>
        <Form>
          <header>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Novo filme</h1>
          </header>

          <Section>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number"/>
          </Section>
          
          <Textarea placeholder="Observações" />
          
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
            <button id="blackbutton">Excluir filme</button>
            <Button title="Salvar alterações"/>
          </Section>
        </Form>
      </main>
    </Container>
    </>
  )
}