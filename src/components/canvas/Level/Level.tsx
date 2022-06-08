import { GroupProps } from "@react-three/fiber";

type Props = Partial<GroupProps> & {};

const Level = ({ ...props }: Props) => {
  return (
    <group {...props}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
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
