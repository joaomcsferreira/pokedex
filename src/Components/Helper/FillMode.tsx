import React from "react"
import { FillContainer } from "./style"

interface FillModeProps {
  setModal?: React.Dispatch<React.SetStateAction<string | null>>
  children?: React.ReactNode
}

const FillMode = ({ setModal, children }: FillModeProps) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <FillContainer onClick={() => setModal && setModal(null)}>
      {children && children}
    </FillContainer>
  )
}

export default FillMode
