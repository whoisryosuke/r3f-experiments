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
            {new Array(50).fill(0).map((_,index) => 
                <Sphere key={index} factor={FACTORS[FACTORS.length % index]} />
            )}
            <Collisons />
        </Physics>
    </>
  )
}
export default Scene
