import useStore from "@/helpers/store";
import { GroupProps, useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import PlayerModel from "./PlayerModel";
import input from "@/modules/input";
import { useBox } from "@react-three/cannon";

type Props = Partial<GroupProps> & {
  disabled?: boolean;
};

const MOVE_MULTIPLIER = 1;

const Player = ({ disabled = false, ...props }: Props) => {
  // const position = useRef<Vector3>([0, 0, 0]);
  // const playerRef = useRef<Group>();
  const [ref, api] = useBox(() => ({ mass: 1 }));

  useFrame(() => {
    // console.log("input", input.controls.move.value);
    // Jump command
    if (input.controls.fire.value) {
      let newY = ref.current.position.y + 1;

      // Limit jump height
      if (newY > 1) {
        newY = 1;
      }
      api.position.set(0, newY, 0);
      // api.velocity.set(0, 3, 0);
    }
    // Movement
    if (input.controls.move.value) {
      // How much did we move in each direction?
      // We use the input (which is -1 to 1)
      // We invert the Z to accomodate how it increments (e.g. deeper = neg, but forward = positive on input)
      const inputX = input.controls.move.value.x * MOVE_MULTIPLIER;
      const inputZ = input.controls.move.value.y * -1 * MOVE_MULTIPLIER;

      // Add the current position with the movement amount
      const newX = ref.current.position.x + inputX;
      const newZ = ref.current.position.z + inputZ;

      // We save Y just in case it changes? Also just shorter
      const oldY = ref.current.position.y;
      // api.position.set(newX, oldY, newZ);
      api.velocity.set(newX, oldY, newZ);
    }
  });

  return (
    <group ref={ref} {...props}>
      <PlayerModel />
    </group>
  );
};
export default Player;
