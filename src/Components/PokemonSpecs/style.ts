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
  width: 90vw;
  height: 90vh;
  background-color: ${({ color }) => `var(${color})`};
  border-radius: 1rem;
  z-index: 6;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: end;

  &:before {
    content: "";
    position: absolute;
    width: 90%;
    height: 90%;
    top: -45%;
    left: -25%;
    z-index: -1;
    background: url(${({ src }) => src}) 0 0 no-repeat;
    transform: rotate(-45deg);
  }
`

const PokemonSection = styled.div`
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const PokemonImg = styled.img`
  width: 80%;
  margin: 0 auto;
`

const PokemonNameContainer = styled.div`
  border-radius: 1rem;
  margin: auto 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--g-colorTransparentWhite40);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid var(--g-colorTransparentWhite18);
`

const PokemonStatsContainer = styled.div`
  background-color: var(--g-colorGray200);
  display: flex;
  height: 90vh;
`

const MenuSectionContainer = styled.ul`
  width: 4rem;
  height: 100%;
  display: grid;
`

const MenuSectionItem = styled.li<MenuSectionItemProps>`
  writing-mode: vertical-lr;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: ${({ active }) =>
    active ? "var(--g-colorGray300)" : "var(--g-colorGray100)"};
  color: ${({ active }) =>
    active ? "var(--g-colorGray100)" : "var(--g-colorGray300)"};
  cursor: pointer;
`

const PageInfoContainer = styled.div`
  background-color: var(--g-colorGray300);
  padding: 2rem;
  width: 100%;
  height: 100%;
`

const PageAboutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PageAboutSection = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const PageAboutSectionItems = styled.div`
  height: 100%;
`

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

const PageEvolutionContainer = styled(PageInfoContainer)`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1rem;
  overflow-x: scroll;
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
    height: 90px;
    width: 90px;
    left: -65px;
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
  PokemonStatsContainer,
  PokemonSection,
  PokemonImg,
  PokemonNameContainer,
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
