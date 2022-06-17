import useStore from "@/helpers/store";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group, Vector3 } from "three";
import PlayerModel from "./PlayerModel";
import input from "@/modules/input";
import { Triplet, useBox } from "@react-three/cannon";
import { off } from "process";
import { SpringValue, useSpring } from "@react-spring/three";

type Props = Partial<GroupProps> & {
  position: Triplet;
  disabled?: boolean;
};

const MOVE_MULTIPLIER = 10;
const JUMP_HEIGHT = 100;

const Player = ({ disabled = false, position, ...props }: Props) => {
  // const position = useRef<Vector3>([0, 0, 0]);
  const isGrounded = useRef(false);
  const playerRef = useRef<Group>();
  const jumpHeight = useRef<SpringValue>(new SpringValue(0));
  const [, api] = useBox(
    () => ({
      mass: 2,
      position,
      onCollide: (e) => {
        // console.log("player collided", e);
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
      // newY = JUMP_HEIGHT;
      jumpHeight.current.start({ from: 0, to: JUMP_HEIGHT * 2 });
      isGrounded.current = false;
    } else {
      jumpHeight.current.start({ to: 0 });
    }
    newY = jumpHeight.current.get();

    // Movement
    let newX = 0;
    let newZ = 0;
    if (input.controls.move.value) {
      // How much did we move in each direction?
      // We use the input (which is -1 to 1)
      // We invert the Z to accomodate how it increments (e.g. deeper = neg, but forward = positive on input)
      const inputX = input.controls.move.value.x * MOVE_MULTIPLIER;
      const inputZ = input.controls.move.value.y * -1 * MOVE_MULTIPLIER;

      // Add the current position with the movement amount
      newX = inputX;
      newZ = inputZ;
    }
    api.rotation.set(0, 0, 0);
    api.velocity.set(newX, newY, newZ);
    // api.position.set(newX, newY, newZ);
  });

  let vec = new Vector3();
  const MULTIPLIER = 1;
  useEffect(() => api.position.subscribe((p) => {
    // Increase fall speed for player
    const PLAYER_GRAVITY = 200
    // Only do gravity when player is above the ground level (-0.4 here)
    // if(p[1] > -0.4) {

    // Only do it when player isn't grounded
    if(!isGrounded.current) {
    api.applyForce(
      vec
        .set(...p)
        .setY(p[1] - PLAYER_GRAVITY)
        .toArray(),
      [0, 0, 0]
    );
    }
  }), [api]) // prettier-ignore

  return (
    <group ref={playerRef} {...props}>
      <PlayerModel />
    </group>
  );
};
export default Player;
