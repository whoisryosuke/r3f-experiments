import { Mesh } from "three"

type Props = Mesh;

const Arrow = ({ ...props }: Props) => {
  return (
    <mesh {...props}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={'blue'} />
    </mesh>
  )
}
export default Arrow
