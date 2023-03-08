import React from "react"

import { LoadingContainer, LoadingIcon } from "./style"

import pokeball from "../../assets/pokeball.svg"

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon src={pokeball} />
    </LoadingContainer>
  )
}

export default Loading
