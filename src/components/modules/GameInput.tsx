import useStore from "@/helpers/store";
import useKeyPress from "@/hooks/useKeyPress";
import React from "react";

type Props = {};

function GameInput({}: Props) {
  const { setControls } = useStore();

  const handleForwardDown = () => {
    console.log("paddle down!");
    setControls({
      forward: true,
    });
  };
  const handleForwardUp = () => {
    setControls({
      forward: false,
    });
  };
  const handleBackDown = () => {
    console.log("paddle down!");
    setControls({
      backward: true,
    });
  };
  const handleBackUp = () => {
    setControls({
      backward: false,
    });
  };

  useKeyPress("w", null, handleForwardDown, handleForwardUp);
  useKeyPress("s", null, handleBackDown, handleBackUp);

  return <></>;
}

export default GameInput;
