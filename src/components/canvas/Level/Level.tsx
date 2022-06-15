import { usePlane } from "@react-three/cannon";
import { softShadows } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import Obstacle from "../Obstacle/Obstacle";

type Props = Partial<GroupProps> & {};

softShadows();

const Level = ({ ...props }: Props) => {
  const [ref, api] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  return (
    <group {...props}>
      <mesh name="floor" ref={ref} castShadow receiveShadow>
        <planeBufferGeometry args={[100, 100]} />
        <meshPhysicalMaterial color={"green"} />
      </mesh>

      <Obstacle position={[3, -0.5, -1]} />
      <Obstacle position={[3, -0.5, -2]} />
      <Obstacle position={[3, -0.5, -3]} />

      {/* Lighting */}
      <directionalLight
        position={[5, 5, 5]}
        castShadow
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <ambientLight />
    </group>
  );
};
export default Level;
