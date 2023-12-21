import React from 'react'

type Props = {
  children : React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat font-bold text-3xl mt-6 ">{children}</h1>
  )
}

export default HText