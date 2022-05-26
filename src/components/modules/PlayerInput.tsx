import useStore from '@/helpers/store'
import useKeyPress from '@/hooks/useKeyPress'
import { useFrame } from '@react-three/fiber'
import React from 'react'

type Props = {}

const PlayerInput = (props: Props) => {
    const {setControls } = useStore();

    const onConfirm = () => {
        console.log('confirm!')
        setControls({
            confirm: true,
        })
    }
    const offConfirm = () => {
        setControls({
            confirm: false,
        })
    }
    useKeyPress('g', null, onConfirm, offConfirm);
    
  return (
    <>
    </>
  )
}

export default PlayerInput