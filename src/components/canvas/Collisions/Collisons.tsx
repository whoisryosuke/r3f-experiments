import { useFrame, useThree } from '@react-three/fiber'
import { usePlane, useSphere } from '@react-three/cannon'
import React from 'react'

type Props = {}

const Collisons = (props: Props) => {
    const viewport = useThree((state) => state.viewport)
    usePlane(() => ({ position: [0, 0, 0], rotation: [0, 0, 0] }))
    usePlane(() => ({ position: [0, 0, 8], rotation: [0, -Math.PI, 0] }))
    usePlane(() => ({ position: [0, -4, 0], rotation: [-Math.PI / 2, 0, 0] }))
    usePlane(() => ({ position: [0, 4, 0], rotation: [Math.PI / 2, 0, 0] }))
    const [ref, api] = useSphere(() => ({ type: "Kinematic", args: [2] }))
    useFrame((state) => {
        api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 2.5)
    })
    return <>
        {/* <mesh name="debug-sphere" ref={ref}>
            <sphereBufferGeometry args={[1, 8, 4]} />
            <meshPhysicalMaterial color={'green'} />
        </mesh> */}
    </>
}

export default Collisons