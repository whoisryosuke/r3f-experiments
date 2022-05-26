import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useState } from "react";

type Props = Partial<GroupProps> & {
    gameStarted: boolean
    startGame: any;
    endGame: any;
};

const ButtonText = (<Text color='white' anchorX='center' anchorY='middle' fontSize={1}>Start Game</Text>);

const Button = ({ gameStarted, startGame, endGame, ...props }: Props) => {
  const [hovered, setHover] = useState(false)
  return (
      <group {...props} onClick={gameStarted ? endGame : startGame}>
        <mesh position={[0,0,-0.001]}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}>
            <planeBufferGeometry args={[6, 1.75]} />
            <meshPhysicalMaterial color={hovered ? "darkgreen" : "green"}  />
        </mesh>
        {ButtonText}
      </group>
  )
}
export default Button

