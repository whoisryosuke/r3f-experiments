import useStore from "@/helpers/store";
import input from "@/modules/input";
import { useFrame } from "@react-three/fiber";
import React, { useCallback, useRef } from "react";
import PauseMenuRoot from "./PauseMenuRoot";
// import { throttle } from "throttle-debounce";
import throttle from "lodash-es/throttle";

type Props = {};

const PauseMenu = (props: Props) => {
  const { paused, setPaused } = useStore();
  const isPressed = useRef(false);

  const pauseGame = (isPaused) => {
    setPaused(isPaused);
    console.log("pause state change", isPaused);
  };

  const handlePause = useCallback(
    throttle(
      (isPaused) => {
        pauseGame(isPaused);
        console.log("pausing (or unpausing) game", isPaused);
      },
      1000,
      { trailing: false, leading: true }
    ),
    [pauseGame]
  );

  useFrame(() => {
    // Pause menu button check
    if (input.controls.menu.value) {
      !isPressed.current && handlePause(!paused);
      isPressed.current = true;
      console.log("pause btn!", paused, input.controls.menu.value);
    } else {
      isPressed.current = false;
    }
  });

  return paused ? <PauseMenuRoot /> : <></>;
};

export default PauseMenu;
