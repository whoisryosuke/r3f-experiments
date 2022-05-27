import * as THREE from 'three'
import { useFrame, extend, MeshProps } from '@react-three/fiber'
import { useRef, useState } from 'react'
import useStore from '@/helpers/store'
import { shaderMaterial } from '@react-three/drei'
import { Color, Mesh } from "three"

import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(8/255, 108/255, 149/255),
    borderColor: new THREE.Color(0.9,0.9,0.9),
    borderWidth: 0.1,
  },
  vertex,
  fragment
)

// This is the 🔑 that HMR will renew if this file is edited
// It works for THREE.ShaderMaterial as well as for drei/shaderMaterial
// @ts-ignore
ColorShiftMaterial.key = THREE.MathUtils.generateUUID()

extend({ ColorShiftMaterial })

type Props = Partial<MeshProps> & {
  color: Color;
  borderColor: Color;
}

const Shader = ({
  color,
  borderColor,
  ...props
}: Props) => {
  const meshRef = useRef(null)
  console.log('color', color)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    }
    if (meshRef.current.material) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2)
    }

    if(meshRef.current.material && color) {
      meshRef.current.material.uniforms.color.value = color;
    }
    if(meshRef.current.material && borderColor) {
      meshRef.current.material.uniforms.borderColor.value = borderColor;
    }
  })

  return (
    <mesh
      ref={meshRef}
      {...props}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* @ts-ignore */}
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
    </mesh>
  )
}

export default Shader
