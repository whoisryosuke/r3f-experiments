import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import Button from './Button';
import useStore from "@/helpers/store"
import PlayerInput from '../modules/PlayerInput';
import CustomText from './Text';

type Props = {}

const Game = (props: Props) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameStartTime, setGameStartTime] = useState<Date>(null);
    const { score, addScore } = useStore();

    const startGame = () => {
        setGameStarted(true);
        setGameStartTime(new Date());
    }

    const endGame = () => {
        setGameStarted(false);
        setGameStartTime(null);
    }

    const increaseScore = (newScore: number) => {
        addScore(newScore);
    }

    // Create a start time
    // If player presses input in 1 second increments (or kinda near)
    // Score increases
    useFrame(() => {
        const { controls: { confirm } } = useStore.getState();

        if(confirm) {
            // Check if it's close to 1 second interval of time
            const currentTime = new Date();
            const gameTime = currentTime.getTime() - gameStartTime.getTime();
            const seconds = gameTime/1000;
            const decimalTime = seconds % 1;
            
            // Increase score if the difference is small (0.1 or less)
            if(decimalTime <= 0.1) {
                console.log('score increased!')
                increaseScore(100);
            }

            console.log('difference is', seconds, decimalTime)
        }
        
    })

  return (
    <>
        {gameStarted && <>
            <CustomText>{score}</CustomText>
            <PlayerInput />
        </>}
        {!gameStarted && <Button gameStarted={gameStarted} startGame={startGame} endGame={endGame} />}
        <directionalLight position={[5, 5, 5]} />
        <ambientLight />
    </>
  )
}

export default Game