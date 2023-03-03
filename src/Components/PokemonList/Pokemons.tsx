import React from "react"
import List from "./List"

const Pokemons = () => {
  const [currentPage, setCurrentPage] = React.useState(0)

  return <List currentPage={currentPage} setCurrentPage={setCurrentPage} />
}

export default Pokemons
