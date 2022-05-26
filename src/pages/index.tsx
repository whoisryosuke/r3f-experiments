import dynamic from 'next/dynamic'
// import Shader from '@/components/canvas/Shader/Shader'
// import Game from '@/components/canvas/Game'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Game = dynamic(() => import('@/components/canvas/Game'), {
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
      <Game />
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
