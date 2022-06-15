import { usePlane } from "@react-three/cannon";
import { GroupProps } from "@react-three/fiber";
import Obstacle from "../Obstacle/Obstacle";

type Props = Partial<GroupProps> & {};

const Level = ({ ...props }: Props) => {
  const [ref, api] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  return (
    <group {...props}>
      <mesh ref={ref} castShadow receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhysicalMaterial color={"green"} />
      </mesh>

      <Obstacle position={[3, 0, -1]} />
      <Obstacle position={[3, 0, -2]} />
      <Obstacle position={[3, 0, -3]} />

      {/* Lighting */}
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </group>
  );
};
export default Level;
