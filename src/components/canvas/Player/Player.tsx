import useStore from "@/helpers/store";
import { GroupProps, useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import PlayerModel from "./PlayerModel";

type Props = Partial<GroupProps> & {
  disabled?: boolean;
};

const Player = ({ disabled = false, ...props }: Props) => {
  // const position = useRef<Vector3>([0, 0, 0]);
  const playerRef = useRef<Mesh>();

  useFrame(() => {
    const { controls } = useStore.getState();

    if (controls.forward) {
      playerRef.current.position.set(0, 1, 0);
    }
  });

  return (
    <group {...props}>
      <PlayerModel ref={playerRef} />
    </group>
  );
};
export default Player;
