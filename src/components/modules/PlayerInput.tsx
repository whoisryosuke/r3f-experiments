import useStore from "@/helpers/store";
import useKeyPress from "@/hooks/useKeyPress";
import { useFrame } from "@react-three/fiber";
import React from "react";

type Props = {};

const PlayerInput = (props: Props) => {
  const { setControls } = useStore();

  const onConfirm = () => {
    console.log("confirm!");
    setControls({
      confirm: true,
    });
  };
  const offConfirm = () => {
    setControls({
      confirm: false,
    });
  };

  // Left
  const onLeft = () => {
    console.log("left!");
    setControls({
      left: true,
    });
  };
  const offLeft = () => {
    setControls({
      left: false,
    });
  };
  // Right
  const onRight = () => {
    setControls({
      right: true,
    });
  };
  const offRight = () => {
    setControls({
      right: false,
    });
  };
  useKeyPress("g", null, onConfirm, offConfirm);
  useKeyPress("a", null, onLeft, offLeft);
  useKeyPress("d", null, onRight, offRight);

  return <></>;
};

export default PlayerInput;
