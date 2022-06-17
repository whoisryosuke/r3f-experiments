import { GroupProps } from "@react-three/fiber";

type Props = Partial<GroupProps> & {};

const PauseMenuRoot = ({ ...props }: Props) => {
  return (
    <group {...props}>
      <mesh>
        <planeBufferGeometry args={[1, 1]} />
        <meshPhysicalMaterial color={"blue"} />
      </mesh>
    </group>
  );
};
export default PauseMenuRoot;
