import { useSphere } from '@react-three/cannon'
import { useEffect } from 'react'
import {Vector3} from 'three'

const Sphere = ({ vec = new Vector3(), factor = 1, ...props }) => {
  const [ref, api] = useSphere(() => ({ position: [0, 0, 2], rotation: [0, 0, 0], mass: 1, angularDamping: 0.2, linearDamping: 0.95 }))
  useEffect(() => api.position.subscribe((p) => api.applyForce(vec.set(...p).normalize().multiplyScalar(-factor * 35).toArray(), [0, 0, 0])), [api])
  return (
    <mesh ref={ref}>
        <sphereBufferGeometry args={[1, 8, 4]} />
        <meshPhysicalMaterial color={'blue'} />
    </mesh>
  )
}
export default Sphere
