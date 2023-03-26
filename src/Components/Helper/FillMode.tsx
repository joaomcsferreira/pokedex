import React from "react"
import { FillContainer } from "./style"

interface FillModeProps {
  setModal?: React.Dispatch<React.SetStateAction<string | null>>
  children?: React.ReactNode
}

const FillMode = ({ setModal, children }: FillModeProps) => {
  return (
    <FillContainer onClick={() => setModal && setModal(null)}>
      {children && children}
    </FillContainer>
  )
}

export default FillMode
