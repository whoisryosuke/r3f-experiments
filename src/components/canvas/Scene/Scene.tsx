import GameInput from "@/components/modules/GameInput";
import { Physics } from "@react-three/cannon";
import Paddle from "../Paddle/Paddle";
import Sphere from "../Sphere/Sphere";

const FACTORS = [0.5, 0.75, 1];

const Scene = () => {
  return (
    <>
      <Physics gravity={[0, 0, 0]} iterations={10}>
        {new Array(10).fill(0).map((_, index) => (
          <Sphere key={index} factor={FACTORS[FACTORS.length % index]} />
        ))}
        <Paddle />
      </Physics>
      <GameInput />
    </>
  );
};
export default Scene;
