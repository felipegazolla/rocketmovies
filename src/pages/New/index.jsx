import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Container, Form, Section, Addtags } from "./styles"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieMarker } from "../../components/Moviemarker"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function New() {
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
            <MovieMarker value="React"/>
            <MovieMarker placeholder="Novo Marcador" isNew/>
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