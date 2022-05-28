import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import Button from "./Button";
import Level from "./Level";
import Player from "./Player";
import useStore from "@/helpers/store";
import PlayerInput from "../modules/PlayerInput";
import CustomText from "./Text";
import { Vector3 } from "three";

type Props = {};

const Game = (props: Props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [walk, setWalk] = useState(false);
  //   const [playerPosition, setPlayerPosition] = useState(new Vector3(0, -1, 0));
  const [playerPosition, setPlayerPosition] = useState([0, -1, 0]);

  const startGame = () => {
    setGameStarted(true);
  };

  const endGame = () => {
    setGameStarted(false);
  };

  useFrame(() => {
    const { controls } = useStore.getState();

    let isWalking = false;
    if (controls.left) {
      console.log("moving left!");
      //   setPlayerPosition((prevPosition) =>
      //     prevPosition.setX(prevPosition.x + 0.1)
      //   );
      setPlayerPosition((prevPosition) => [
        prevPosition[0] - 0.01,
        prevPosition[1],
        prevPosition[2],
      ]);
      isWalking = true;
    }
    if (controls.right) {
      setPlayerPosition((prevPosition) => [
        prevPosition[0] + 0.01,
        prevPosition[1],
        prevPosition[2],
      ]);
      isWalking = true;
    }
    setWalk(isWalking);
  });

  console.log("player position", playerPosition);

  return (
    <>
      {gameStarted && (
        <>
          <Player position={playerPosition} walk={walk} />
          <Level />
          <PlayerInput />
        </>
      )}
      {!gameStarted && (
        <Button
          gameStarted={gameStarted}
          startGame={startGame}
          endGame={endGame}
        />
      )}
      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  );
};

export default Game;
