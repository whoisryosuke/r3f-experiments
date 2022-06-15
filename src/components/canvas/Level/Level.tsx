import { usePlane } from "@react-three/cannon";
import { GroupProps } from "@react-three/fiber";

type Props = Partial<GroupProps> & {};

const Level = ({ ...props }: Props) => {
  const [ref, api] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <group {...props}>
      <mesh ref={ref} castShadow receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhysicalMaterial color={"green"} />
      </mesh>

      {/* Lighting */}
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </group>
  );
};
export default Level;
