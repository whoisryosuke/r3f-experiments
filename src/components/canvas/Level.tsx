import ForestOne from "./Levels/ForestOne/ForestOne";

const BoxMesh = ({ ...props }) => {
  return (
    <group {...props}>
      <ForestOne position={[0, -2, 0]} />
      {/* Floor collider */}
      {/* <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[1, 1]} />
        <meshPhysicalMaterial color={"blue"} />
      </mesh> */}
    </group>
  );
};
export default BoxMesh;
