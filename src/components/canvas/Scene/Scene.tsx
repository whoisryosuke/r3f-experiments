import { Physics } from '@react-three/cannon'
import Collisons from '../Collisions/Collisons'
import Sphere from '../Sphere/Sphere'

const Scene = () => {
  return (
    <>
        <Physics gravity={[0, 0, 0]} iterations={10} >
            <Sphere />
            <Collisons />
        </Physics>
        <directionalLight position={[5, 5, 5]} />
        <ambientLight />
    </>
  )
}
export default Scene
