import { Physics } from '@react-three/cannon'
import Collisons from '../Collisions/Collisons'
import Sphere from '../Sphere/Sphere'

const FACTORS = [
    0.5,
    0.75,
    1
]

const Scene = () => {
  return (
    <>
        <Physics gravity={[0, 0, 0]} iterations={10} >
            {new Array(10).fill(0).map((_,index) => 
                <Sphere key={index} factor={FACTORS[FACTORS.length % index]} />
            )}
            <Collisons />
        </Physics>
        <directionalLight position={[5, 5, 5]} />
        <ambientLight />
    </>
  )
}
export default Scene
