import { Stars } from '@react-three/drei'
import React from 'react'
import KeyboardInput from '../input/KeyboardInput'
import PlayerControl from './PlayerControl'
import DebugObjects from './DebugObjects'
import BulletControl from './BulletControl'

type Props = {}

const Scene = (props: Props) => {
  return (
    <>
      <Stars />
      <DebugObjects />
      <PlayerControl />
      <BulletControl />
      <KeyboardInput />
      <ambientLight />
    </>
  )
}

export default Scene