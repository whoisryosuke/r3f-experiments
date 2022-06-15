import useStore from "@/helpers/store";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Mesh, Vector3 } from "three";
import PlayerModel from "./PlayerModel";
import input from "@/modules/input";
import { Triplet, useBox } from "@react-three/cannon";
import { off } from "process";

type Props = Partial<GroupProps> & {
  position: Triplet;
  disabled?: boolean;
};

// const MOVE_MULTIPLIER = 10;
const MOVE_MULTIPLIER = 0.1;

const Player = ({ disabled = false, position, ...props }: Props) => {
  // const position = useRef<Vector3>([0, 0, 0]);
  const isGrounded = useRef(false);
  const groupRef = useRef<Group>();
  const playerRef = useRef<Mesh>();
  const [, api] = useBox(
    () => ({
      mass: 2,
      position,
      onCollide: (e) => {
        console.log("player collided", e);
        // This doesn't work as intended
        // since the player can land on obstacles and not be able to jump
        // unless that's useful...
        if (e.body.name === "floor") isGrounded.current = true;
      },
    }),
    playerRef
  );

  useFrame(() => {
    // console.log("y", playerRef.current.position.y);
    // console.log("input", input.controls.move.value);

    // Jump command
    let newY = 0;
    if (input.controls.fire.value && isGrounded.current) {
      newY = 50;
      isGrounded.current = false;

      // Limit jump height
      // if (newY > 1) {
      //   newY = 1;
      // }
    }

    // Movement
    // let newX = 0;
    // let newZ = 0;
    let newX = groupRef.current.position.x;
    let newZ = groupRef.current.position.z;
    if (input.controls.move.value) {
      // How much did we move in each direction?
      // We use the input (which is -1 to 1)
      // We invert the Z to accomodate how it increments (e.g. deeper = neg, but forward = positive on input)
      const inputX = input.controls.move.value.x * MOVE_MULTIPLIER;
      const inputZ = input.controls.move.value.y * -1 * MOVE_MULTIPLIER;

      // Add the current position with the movement amount
      newX += inputX;
      newZ += inputZ;
    }
    api.rotation.set(0, 0, 0);
    // api.velocity.set(newX, newY, newZ);
    // api.position.set(newX, newY, newZ);
    groupRef.current.position.set(newX, newY, newZ);
  });

  // let vec = new Vector3();
  // const MULTIPLIER = 1;
  // useEffect(() => api.position.subscribe((p) => {
  //   // Increase fall speed for player
  //   const PLAYER_GRAVITY = 200
  //   // Only do gravity when player is above the ground level (-0.4 here)
  //   // if(p[1] > -0.4) {

  //   // Only do it when player isn't grounded
  //   if(!isGrounded.current) {
  //   api.applyForce(
  //     vec
  //       .set(...p)
  //       .setY(p[1] - PLAYER_GRAVITY)
  //       .toArray(),
  //     [0, 0, 0]
  //   );
  //   }
  // }), [api]) // prettier-ignore

  return (
    <group ref={groupRef} {...props}>
      <PlayerModel ref={playerRef} />
    </group>
  );
};
export default Player;
