import styled, { keyframes } from "styled-components"

interface PokemonContainerProps {
  color: string
  src: string
}

interface MenuSectionItemProps {
  active?: boolean
}

interface PokemonXPProps {
  size?: number
}

interface StatBarProps {
  width: number
  color: string
}

interface PageAboutMenuInfoProps {
  columns: string
  rows: string
}

interface EvolutionContainerProps {
  src: string
}

const animeArrow = keyframes`
  from {
    transform: translateX(20px);
  } to {
    transform: initial;
  }
`

const PokemonContainer = styled.div<PokemonContainerProps>`
  background-color: ${({ color }) => `var(${color})`};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: scroll;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 950px) {
    flex-direction: row;
    height: 95vh;
    width: 90vw;
    top: 2.5%;
    left: 5%;
    border-radius: 1rem;
    overflow: hidden;
  }
`

const ButtonCloseMobile = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  padding: 0.5rem;
  background-color: var(--g-colorGray300);
  border: 3px solid var(--g-colorGray100);
  border-radius: 50%;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 2;

  @media (min-width: 950px) {
    display: none;
  }
`

const PokemonSection = styled.div`
  border-radius: 1rem;
  padding: 1rem;

  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const PokemonImg = styled.img`
  width: 90%;
  max-height: 60vh;
  margin: 0 auto;

  @media (min-width: 950px) {
    width: 25vw;
    max-height: 80vh;
  }
`

const PokemonNameContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--g-colorTransparentWhite40);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid var(--g-colorTransparentWhite18);
`

const MenuSectionContainer = styled.ul`
  display: flex;
  width: 100%;
  height: min-content;
  justify-content: space-between;

  @media (min-width: 950px) {
    flex-direction: column;
    width: auto;
    height: 100%;
  }
`

const MenuSectionItem = styled.li<MenuSectionItemProps>`
  font-size: 1.5rem;
  font-weight: 900;
  padding: 0.5rem;
  flex: 1;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

  background-color: ${({ active }) =>
    active ? "var(--g-colorGray300)" : "var(--g-colorGray250)"};
  color: var(--g-colorGray100);
  cursor: pointer;

  @media (min-width: 950px) {
    writing-mode: vertical-lr;
  }
`

const PageInfoContainer = styled.div`
  background-color: var(--g-colorGray300);
  padding: 1rem;
  max-height: max-content;
  min-height: fit-content;

  @media (min-width: 950px) {
    width: 100%;
  }
`

const PageAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PageAboutSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const PageAboutSectionItems = styled.div``

const PageAboutSectionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const PageAboutMenuInfo = styled.div<PageAboutMenuInfoProps>`
  background-color: var(--g-colorGray150);
  display: grid;
  text-align: center;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, auto);
  padding: 0.5rem;
  border-radius: 0.25rem;
  gap: 0.5rem;
`

const PokemonXP = styled.div<PokemonXPProps>`
  width: ${({ size }) => (size ? `${size}px` : "70px")};
  height: ${({ size }) => (size ? `${size}px` : "70px")};
  background-color: var(--g-colorGray250);
  padding: 0.5rem;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
`

const TextContainer = styled.div`
  border: 1px solid var(--g-color-white);
  padding: 0.5rem;
  border-radius: 1rem;
  text-transform: capitalize;
`

const IdTextContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
`

const PageStatsContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`

const PageStatsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
`

const PageStatsItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
  gap: 1.5rem;

  & > :first-child {
    justify-self: end;
  }
`

const StatBar = styled.div<StatBarProps>`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background-color: var(--g-colorGray200);
  position: relative;

  &:after {
    content: "";
    width: ${({ width }) => `${width}%`};
    height: 15px;
    background-color: ${({ color }) => `var(${color})`};
    position: absolute;
    border-radius: 5px;
  }
`

const PageEvolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 70vh;

  @media (min-width: 950px) {
    overflow-x: scroll;
    height: 100%;
  }
`

const EvolutionContainer = styled.div<EvolutionContainerProps>`
  justify-content: space-around;
  align-items: flex-end;
  background-color: var(--g-colorGray200);
  border-radius: 1rem;
  padding: 2rem 0;
  gap: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    position: relative;
  }

  & > div:not(:first-child)::before {
    content: "";
    position: absolute;
    top: calc(50% - 45px);
    background: url(${({ src }) => src});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 50%;
    width: 50%;
    left: -40%;
    animation: ${animeArrow} 0.7s alternate infinite;
  }
`

const PokemonPreviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: flex-end;
`

const PokemonPreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 0.75rem;
`

const PokemonPreviewImage = styled.img``

export {
  PokemonContainer,
  PokemonSection,
  PokemonImg,
  PokemonNameContainer,
  ButtonCloseMobile,
  MenuSectionContainer,
  MenuSectionItem,
  PageInfoContainer,
  PageAboutContainer,
  PageAboutMenuInfo,
  PokemonXP,
  TextContainer,
  PageAboutSection,
  PageAboutSectionItems,
  PageAboutSectionItem,
  IdTextContainer,
  PageStatsContainer,
  PageStatsSection,
  PageStatsItem,
  StatBar,
  PageEvolutionContainer,
  EvolutionContainer,
  PokemonPreviewContainer,
  PokemonPreviewInfo,
  PokemonPreviewImage,
}
