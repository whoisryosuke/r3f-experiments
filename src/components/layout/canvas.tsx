import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import { OrbitControls, Preload, Stats } from "@react-three/drei";
import useStore from "@/helpers/store";
import { useEffect, useRef } from "react";

const LControl = () => {
  const control = useRef(null);
  return <OrbitControls ref={control} />;
};
const LCanvas = ({ children }) => {
  return (
    <>
      <Canvas
        // Is this deprecated or typed wrong? Ignoring for now.
        // @ts-ignore
        mode="concurrent"
        style={{
          position: "absolute",
          top: 0,
        }}
        // This breaks all interactions (hover, click/press, etc)
        // onCreated={(state) => state.events.connect(dom.current)}
      >
        <Stats />
        <LControl />
        <Preload all />
        {children}
      </Canvas>
      <A11yAnnouncer />
    </>
  );
};

export default LCanvas;
