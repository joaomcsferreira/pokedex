import React from "react"
import {
  HomeContainer,
  LogoContainer,
  LogoIcon,
  SearchContainer,
} from "./style"

import logo from "../assets/pokemon_logo.svg"
import Input from "./Form/Input"
import useForm from "../Hooks/useForm"
import Button from "./Form/Button"

const Home = () => {
  const search = useForm()

  return (
    <HomeContainer>
      <LogoContainer>
        <LogoIcon src={logo} />
      </LogoContainer>
      <SearchContainer>
        <Input type="text" placeholder="Search your Pokemon..." {...search} />
        <Button radius={3.125} color="--g-color-primary">
          Search
        </Button>
      </SearchContainer>
      <div>feed</div>
    </HomeContainer>
  )
}

export default Home
