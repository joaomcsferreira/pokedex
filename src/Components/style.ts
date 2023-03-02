import styled from "styled-components"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 2rem;
`

const LogoContainer = styled.div`
  width: 100%;
  background-color: var(--g-colorGray250);
  border-radius: 1rem;
  padding: 1rem 0;
  text-align: center;
`

const LogoIcon = styled.img`
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 2rem var(--g-color-turquesa));
  }
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

export { HomeContainer, LogoContainer, LogoIcon, SearchContainer }
