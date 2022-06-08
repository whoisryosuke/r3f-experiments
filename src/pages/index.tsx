import useStore from "@/helpers/store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import Scene from '@/components/canvas/Scene/Scene'

// Prefer dynamic import for production builds
// But if you have issues and need to debug in local development
// comment these out and import above instead
// https://github.com/pmndrs/react-three-next/issues/49
const Scene = dynamic(() => import("@/components/canvas/Scene/Scene"), {
  ssr: false,
});

// DOM elements here
const DOM = () => {
  return <></>;
};

// Canvas/R3F components here
const R3F = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Welcome!",
    },
  };
}
