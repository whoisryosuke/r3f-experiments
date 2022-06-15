import { Triplet, useBox } from "@react-three/cannon";
import { Mesh } from "three";

type Props = Partial<Mesh> & {
  position: Triplet;
};

const BoxMesh = ({ position, ...props }: Props) => {
  const [ref, api] = useBox(() => ({
    mass: 1000,
    position,
    type: "Static",
  }));
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={"red"} />
    </mesh>
  );
};
export default BoxMesh;
