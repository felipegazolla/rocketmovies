import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function MovieMarker({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}