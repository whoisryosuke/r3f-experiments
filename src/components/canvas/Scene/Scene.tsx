import { Physics } from "@react-three/cannon";
import Collisons from "../Collisions/Collisons";
import Monkey from "../Monkey/Monkey";
import Sphere from "../Sphere/Sphere";

const FACTORS = [0.5, 0.75, 1];

const Scene = () => {
  return (
    <>
      <Physics gravity={[0, 0, 0]} iterations={10}>
        {new Array(100).fill(0).map((_, index) => (
          <Sphere key={index} factor={FACTORS[FACTORS.length % index]} />
        ))}
        <Monkey />
        <Collisons />
      </Physics>
    </>
  );
};
export default Scene;
