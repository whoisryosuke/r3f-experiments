import React from 'react'
import { Text } from '@react-three/drei'

type Props = {}

const UI = (props: Props) => {
  return (
    <group>
        <mesh>
          <planeBufferGeometry args={[1, 2, 1]} />
          <meshPhysicalMaterial color={'green'} />
        </mesh>
        
      <Text
        color={'#EC2D2D'}
        fontSize={0.1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={'left'}
        // font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[0,0,0.01]}
      >
          Press Start
      </Text>
    </group>
  )
}

export default UI