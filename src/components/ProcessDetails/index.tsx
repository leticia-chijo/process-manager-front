import { useEffect } from "react"
import { DetailsContainer } from "./styled"
import { Process } from "../../types/process"
import { useAnimation } from "framer-motion"
import useIsMobile from "../../hooks/useIsMobile"
import DetailsContent from "./DetailsContent"
import { useRequest } from "../../hooks/useRequest"
import { ProcessService } from "../../services/processService"

interface Props {
  detailsId: number
  setDetailsId: (id: number) => void
}

export default function ProcessDetails({ detailsId, setDetailsId }: Props) {
  const containerControl = useAnimation()
  const isMobile = useIsMobile()
  const {
    data: processData,
    loading,
    error,
    fetchData
  } = useRequest<Process>(() => ProcessService.getById(detailsId))

  useEffect(() => {
    if (detailsId !== 0) {
      fetchData()
    }
  }, [detailsId])

  useEffect(() => {
    if (isMobile) {
      containerControl.start({ y: 0, transition: { duration: 0.6 } })
    } else {
      containerControl.start({ width: "35vw", opacity: 1, transition: { duration: 0.6 } })
    }
  }, [detailsId, isMobile])

  const onClose = async () => {
    if (isMobile) {
      await containerControl.start({ y: "100%", transition: { duration: 0.6 } })
    } else {
      await containerControl.start({ width: 0, opacity: 0, transition: { duration: 0.6 } })
    }
    setDetailsId(0)
  }

  return (
    <DetailsContainer
      animate={containerControl}
      initial={isMobile ? { y: "100%" } : { width: 0, opacity: 0 }}
    >
      {error && <p>Erro: {error}</p>}
      {!error && loading && <p>Carregando...</p>}
      {!error && !loading && processData && <DetailsContent process={processData} onClose={onClose} />}
    </DetailsContainer>
  )
}
