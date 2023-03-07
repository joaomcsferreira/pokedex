import React from "react"

import pokeball from "../../assets/pokeball.svg"
import { LoadingContainer, LoadingIcon } from "./style"

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon src={pokeball} />
    </LoadingContainer>
  )
}

export default Loading
