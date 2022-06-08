import { MeshProps } from "@react-three/fiber";
import { forwardRef } from "react";
import { Mesh } from "three";

type Props = Partial<MeshProps> & {};

const Player = forwardRef<Mesh, Props>(({ ...props }, ref) => {
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={"blue"} />
    </mesh>
  );
});

Player.displayName = "Player";
export default Player;
