import styled, { keyframes } from "styled-components"

interface TypeIconProps {
  size?: number
}

interface TypeNameProps {
  color: string
  size?: number
}

const animeRotate = keyframes`
  from {
    transform: rotate(360deg);
  } to {
    transform: initial;
  }
`

const TypesListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`

const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`

const TypeIcon = styled.img<TypeIconProps>`
  width: ${({ size }) => (size ? `${size}px` : "30px")};
`

const TypeName = styled.p<TypeNameProps>`
  font-size: ${({ size }) => (size ? `${size / 2.675}px` : "0.7rem")};
  text-transform: uppercase;
  font-weight: 700;
  background-color: var(--g-color-white);
  color: ${({ color }) => `var(${color})`};
  padding: 0 0.5rem;
  border-radius: 1rem;
`

const FillContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--g-colorTransparentBlack50);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GraphContainer = styled.div`
  width: 270px;
  height: 270px;
  margin: 0 auto;
`

const LoadingContainer = styled.div`
  animation: ${animeRotate} 1.2s alternate ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingIcon = styled.img`
  width: 200px;
  /* filter: opacity(0.5); */
`

export {
  TypesListContainer,
  TypeContainer,
  TypeIcon,
  TypeName,
  FillContainer,
  GraphContainer,
  LoadingContainer,
  LoadingIcon,
}
