import { ReactNode, useContext } from 'react'
import { ReactStackContext } from './provider'

interface IProps {
  to: string
  target?: string
  children?: ReactNode
}

const Link = ({ to, target = '_self', children }: IProps) => {
  const [_, __, updateStack, ___, historyIdx, setHistoryIdx] = useContext(ReactStackContext)

  const handleClickLink = (e) => {
    if(target === '_blank') return
    e.preventDefault()
    setHistoryIdx(historyIdx + 1)
    updateStack(to)
    window.history.pushState({ index: historyIdx + 1}, '', to)
  }
  return (
    <a href={to} onClick={handleClickLink} target={target}>
      {children}
    </a>
  )
}

export default Link