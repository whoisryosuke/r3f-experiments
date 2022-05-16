import React, {useRef} from 'react'
import useStore from "@/helpers/store"
import { useFrame } from '@react-three/fiber';
import Player from './Player';

type Props = {}

const PlayerControl = (props: Props) => {
    const playerRef = useRef(null);

    useFrame(({camera}) => {
        const { controls } = useStore.getState();
        // console.log(controls)
        if(controls.forward) {
            console.log('moving forward')
            playerRef.current.position.z -= 0.1
            camera.position.z -= 0.1
        }
        if(controls.backward) {
            console.log('moving forward')
            playerRef.current.position.z += 0.1
            camera.position.z += 0.1
        }
        if(controls.left) {
            console.log('moving forward')
            playerRef.current.position.x -= 0.1
            camera.translateX(-0.1);
            // camera.position.x -= 0.1
        }
        if(controls.right) {
            console.log('moving forward')
            playerRef.current.position.x += 0.1
            camera.translateX(0.1);
            // camera.position.x += 0.1
        }
    })
  return (
    <><Player ref={playerRef} /></>
  )
}

export default PlayerControl