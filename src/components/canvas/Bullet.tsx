import { useFrame } from '@react-three/fiber'
import React, {useEffect, useRef} from 'react'

type Props = {
    removeBullet: (id: string) => void
    id: string
}

const BULLET_VELOCITY = 0.1

const Bullet = ({removeBullet, id}: Props) => {
    const ref = useRef(null);
    // Destroy bullet after 3 seconds
    useEffect(() => {
        const timeout = setTimeout(() => removeBullet(id), 3000)
        return () => {
            clearTimeout(timeout);
        }
    }, [removeBullet, id])

    useFrame(() => {
        ref.current.position.z -= BULLET_VELOCITY;
    })
  return (
    <mesh ref={ref} position={[0,0,-4]} rotation={[-Math.PI /2, 0, 0]}>
        <coneBufferGeometry args={[0.5, 1, 4]} scale={0.05} />
        <meshPhysicalMaterial color={'blue'} />
    </mesh>
  )
}

Bullet.displayName = 'Bullet'

export default Bullet