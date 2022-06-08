import GameInput from "@/components/modules/GameInput";
import Level from "../Level/Level";
import Player from "../Player/Player";

const Scene = () => {
  return (
    <>
      <Level />
      <Player position={[0, 0.5, 0]} />
      <GameInput />
    </>
  );
};
export default Scene;
