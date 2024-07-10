import React from "react"
import { ImStarEmpty, ImStarFull} from "react-icons/im"
import { Container } from "./styles"

export function Stars({ rating }) {
  return (
    <Container>
      <span> {rating >= 1 ? <ImStarFull /> : <ImStarEmpty />} </span>
      <span> {rating >= 2 ? <ImStarFull /> : <ImStarEmpty />} </span>
      <span> {rating >= 3 ? <ImStarFull /> : <ImStarEmpty />} </span>
      <span> {rating >= 4 ? <ImStarFull /> : <ImStarEmpty />} </span>
      <span> {rating >= 5 ? <ImStarFull /> : <ImStarEmpty />} </span>
    </Container>
  );
}