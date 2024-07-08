import { Container } from "./styles"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />

      <Section>
        <Tag title="Ficção Científica"/>
        <Tag title="Drama"/>
        <Tag title="Família"/>
      </Section>
      <Button title="Voltar" />
    </Container>
  )
}