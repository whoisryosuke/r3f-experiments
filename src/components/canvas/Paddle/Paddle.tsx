import useStore from "@/helpers/store";
import { Triplet, useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

const PADDLE_ORIGIN: Triplet = [0, 0, 0];

const Paddle = ({ vec = new Vector3(), factor = 1, ...props }) => {
  const [ref, api] = useBox(() => ({
    position: PADDLE_ORIGIN,
    // rotation: [0, 0, 0],
    mass: 10,
    angularDamping: 0.2,
    linearDamping: 0.95,
  }));

  useFrame(({ clock }) => {
    const {
      controls: { paddle },
    } = useStore.getState();
    if (paddle) {
      // api.position.subscribe((p) => api.applyForce([0, 2, 0], [0, 0, 0]));
      // api.applyForce([0, 2, 0], [0, 0, 0]);
      api.rotation.set(0, 0, (Math.PI / 2) * Math.sin(clock.getElapsedTime()));
    } else {
      // Reset back to origin
      api.rotation.set(...PADDLE_ORIGIN);
      // api.position.set(...PADDLE_ORIGIN);
    }
  });

  return (
    <mesh ref={ref} scale={factor} castShadow receiveShadow>
      <boxBufferGeometry args={[1, 3, 1]} />
      <meshPhysicalMaterial color={"teal"} />
    </mesh>
  );
};
export default Paddle;
