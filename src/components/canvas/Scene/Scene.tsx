import GameInput from "@/components/modules/GameInput";
import { Physics } from "@react-three/cannon";
import Level from "../Level/Level";
import Player from "../Player/Player";

const Scene = () => {
  return (
    <>
      <Physics>
        <Level />
        <Player position={[0, 0.5, 0]} />
      </Physics>
      <GameInput />
    </>
  );
};
export default Scene;
