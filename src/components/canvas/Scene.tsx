import { Cloud } from '@react-three/drei'
import React from 'react'
import UI from './UI'

type Props = {}

const Scene = (props: Props) => {
  return (
    <>
      <Cloud position={[-4, -2, 0]} args={[3, 2]} />
      <Cloud position={[-4, 2, 0]} args={[3, 2]} />
      <Cloud args={[3, 2]} />
      <Cloud position={[4, -2, 0]} args={[3, 2]} />
      <Cloud position={[4, 2, 0]} args={[3, 2]} />
      <UI />
    </>
  )
}

export default Scene