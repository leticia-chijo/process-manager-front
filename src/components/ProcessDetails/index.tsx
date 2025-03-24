import { useEffect, useState } from "react"
import { DetailsContainer } from "./styled"
import axios from "axios"
import { Process } from "../../types/process"
import { useAnimation } from "framer-motion"
import useIsMobile from "../../hooks/useIsMobile"
import DetailsContent from "./DetailsContent"

interface Props {
  detailsId: number
  setDetailsId: (id: number) => void
}

export default function ProcessDetails({ detailsId, setDetailsId }: Props) {
  const [process, setProcess] = useState<Process | null>(null)
  const containerControl = useAnimation()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (detailsId !== 0) {
      axios
        .get<Process>(`${import.meta.env.VITE_API_URL}/process/${detailsId}`)
        .then(async (res) => {
          setProcess(res.data)
          if (isMobile) {
            await containerControl.start({ y: 0, transition: { duration: 0.6 } })
          } else {
            await containerControl.start({ width: "35vw", opacity: 1, transition: { duration: 0.6 } })
          }
        })
        .catch((err) => alert(err.response.data))
    }
  }, [detailsId, isMobile])

  const onClose = async () => {
    if (isMobile) {
      await containerControl.start({ y: "100%", transition: { duration: 0.6 } })
    } else {
      await containerControl.start({ width: 0, opacity: 0, transition: { duration: 0.6 } })
    }
    setDetailsId(0)
    setProcess(null)
  }

  return (
    <DetailsContainer
      animate={containerControl}
      initial={isMobile ? { y: "100%" } : { width: 0, opacity: 0 }}
    >
      {process && <DetailsContent process={process} onClose={onClose} />}
    </DetailsContainer>
  )
}
