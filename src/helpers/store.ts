import { Router } from "next/router";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GameControls {
  // Directional
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;

  // Face input
  confirm: boolean;
  cancel: boolean;
}

export interface AppState {
  // NextJS router
  router: Router;
  setRouter: (router) => void;

  // User input mapping
  controls: GameControls;
  setControls: (controls: Partial<GameControls>) => void;
}

export const useStore = create<AppState>()(
  devtools(
    // Optional persist
    // This saves Zustand state when you close browser
    // Good in some cases, but not in others, especially prototyping
    // persist(

    (set) => ({
      // We keep the NextJS router in state because it's undefined in most components
      router: null,
      setRouter: (router) =>
        set((state) => ({
          ...state,
          router,
        })),

      controls: {
        forward: false,
        backward: false,
        left: false,
        right: false,

        // Face input
        confirm: false,
        cancel: false,
      },
      setControls: (newControls) =>
        set((state) => ({
          ...state,
          controls: {
            ...state.controls,
            ...newControls,
          },
        })),
    })

    // END: Optional persist
    // )
  )
);

export default useStore;
