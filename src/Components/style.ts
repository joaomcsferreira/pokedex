import styled from "styled-components"

interface IconProps {
  disabled?: boolean
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 2rem;

  @media (min-width: 950px) {
    width: 80%;
  }
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
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 1.5rem var(--g-color-white));
  }
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

const PaginationContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img<IconProps>`
  width: 4rem;
  background-color: ${({ disabled }) =>
    disabled ? "var(--g-colorGray100)" : "var(--g-color-primary)"};
  padding: 0.2rem;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      !disabled && "var(--g-color-primary-hover)"};
  }
`

export {
  HomeContainer,
  LogoContainer,
  LogoIcon,
  SearchContainer,
  PaginationContainer,
  Icon,
}
