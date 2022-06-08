import useStore from "@/helpers/store";
import useKeyPress from "@/hooks/useKeyPress";
import React from "react";

type Props = {};

function GameInput({}: Props) {
  const { setControls } = useStore();

  const handleShootDown = () => {
    console.log("paddle down!");
    setControls({
      paddle: true,
    });
  };
  const handleShootUp = () => {
    setControls({
      paddle: false,
    });
  };

  useKeyPress("s", null, handleShootDown, handleShootUp);

  return <></>;
}

export default GameInput;
