import * as THREE from 'three'
import dynamic from 'next/dynamic'
// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const DOM = () => {
  return (
    <></>
  )
}

// canvas components goes here
const R3F = ({r3f = true}) => {
  return (
    <>
      <Shader
        color={new THREE.Color(8/255, 108/255, 149/255)}
        borderColor={new THREE.Color(0.9,0.9,0.9)}
        position={[-1,0,0]}
      />
      <Shader
        color={new THREE.Color(149/255, 108/255, 8/255)}
        borderColor={new THREE.Color(0.9,0.9,0.9)}
        position={[1,0,0]}
        />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
