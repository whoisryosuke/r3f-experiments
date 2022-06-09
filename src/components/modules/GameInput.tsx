import { useFrame } from "@react-three/fiber";
import React from "react";
import input from "@/modules/input";

type Props = {};

function GameInput({}: Props) {
  useFrame(() => {
    input.update();
  });

  return <></>;
}

export default GameInput;
