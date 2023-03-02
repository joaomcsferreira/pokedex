import React from "react"
import List from "./List"

const Pokemons = () => {
  const [pages, setPages] = React.useState(0)

  return <List pages={pages} />
}

export default Pokemons
