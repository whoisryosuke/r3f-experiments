import useStore from "@/helpers/store";
import { GroupProps, useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import PlayerModel from "./PlayerModel";
import input from "@/modules/input";
import { Triplet, useBox } from "@react-three/cannon";

type Props = Partial<GroupProps> & {
  position: Triplet;
  disabled?: boolean;
};

const MOVE_MULTIPLIER = 10;

const Player = ({ disabled = false, position, ...props }: Props) => {
  // const position = useRef<Vector3>([0, 0, 0]);
  const playerRef = useRef<Group>();
  const [, api] = useBox(() => ({ mass: 2, position }), playerRef);

  useFrame(() => {
    // console.log("y", playerRef.current.position.y);
    // console.log("input", input.controls.move.value);

    // Jump command
    let newY = 0;
    if (input.controls.fire.value) {
      newY = 1;

      // Limit jump height
      // if (newY > 1) {
      //   newY = 1;
      // }
      // playerRef.current.position.set(
      //   playerRef.current.position.x,
      //   newY,
      //   playerRef.current.position.z
      // );
      // api.position.set(0, newY, 0);
      // api.velocity.set(0, 3, 0);
    }

    // Movement
    let newX = playerRef.current.position.x;
    let newZ = playerRef.current.position.z;
    if (input.controls.move.value) {
      // How much did we move in each direction?
      // We use the input (which is -1 to 1)
      // We invert the Z to accomodate how it increments (e.g. deeper = neg, but forward = positive on input)
      const inputX = input.controls.move.value.x * MOVE_MULTIPLIER;
      const inputZ = input.controls.move.value.y * -1 * MOVE_MULTIPLIER;

      // Add the current position with the movement amount
      newX = newX + inputX;
      newZ = newZ + inputZ;
    }
    api.rotation.set(0, 0, 0);
    api.velocity.set(newX, newY, newZ);
    // api.position.set(newX, newY, newZ);
  });

  return (
    <group ref={playerRef} {...props}>
      <PlayerModel />
    </group>
  );
};
export default Player;
