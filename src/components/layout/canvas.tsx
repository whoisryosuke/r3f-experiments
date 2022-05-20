import { Canvas } from '@react-three/fiber'
import { A11yAnnouncer } from '@react-three/a11y'
import { Environment, OrbitControls, Preload, Stats } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { EffectComposer, SSAO } from "@react-three/postprocessing"

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  // useEffect(() => {
  //   if (control) {
  //     dom.current.style['touch-action'] = 'none'
  //   }
  // }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} 
    //domElement={dom.current} 
  />
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <>
      <Canvas
        shadows
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        mode='concurrent'
        style={{
          position: 'absolute',
          top: 0,
        }}
        // Sets resolution a little higher (set lower for easy "pixelated" look)
        dpr={1.5}
        // Optimizes the renderer by not using certain features (like AA or depth)
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 35, near: 10, far: 40 }}
      >
        {/* Debug stuff */}
        <Stats />
        {/* <LControl /> */}
        <Preload all />
        
        {children}

        {/* Lighting */}
        <ambientLight intensity={0.75} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[512, 512]} />
        <directionalLight position={[0, 5, -4]} intensity={4} />
        <directionalLight position={[0, -15, -0]} intensity={4} color="purple" />

        {/* Post-processing  */}
        <Environment files="/hdr/hilly_terrain_01_4k.hdr" />
        <EffectComposer multisampling={0}>
          <SSAO samples={11} radius={30} intensity={20} luminanceInfluence={0.6} color="purple" />
          <SSAO samples={21} radius={5} intensity={30} luminanceInfluence={0.6} color="purple" />
        </EffectComposer>
      </Canvas>
      <A11yAnnouncer />
    </>
  )
}

export default LCanvas
