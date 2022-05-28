import { Image } from "@react-three/drei";
import { useEffect, useState } from "react";

const SCALE = [1.2, 2, 0];

const Player = ({ walk, ...props }) => {
  const [walking, setWalking] = useState(false);

  const startWalking = () => {
    setWalking((prevState) => !prevState);
  };

  // Trigger walk cycle animation when `walk` prop is passed
  // We set an interval that flips the animation back and forth
  useEffect(() => {
    let interval;
    if (walk) {
      interval = setInterval(startWalking, 200);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [walk]);

  return (
    <group {...props}>
      {!walking ? (
        <Image
          alt="Player"
          url="sprites/mario-standing.png"
          transparent
          //@ts-ignore
          scale={SCALE}
        />
      ) : (
        <Image
          alt="Player"
          url="sprites/mario-walking.png"
          transparent
          //@ts-ignore
          scale={SCALE}
        />
      )}
    </group>
  );
};
export default Player;
