import { Router } from "next/router";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GameControls {
  paddle: boolean;
}

export interface AppState {
  // NextJS router
  router: Router;
  setRouter: (router) => void;

  // Add any types for app-wide state here
  // e.g. game start logic, points/score, etc
  // gameStarted: boolean;
  // points: number;

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
        paddle: false,
      },
      setControls: (newControls) =>
        set((state) => ({
          ...state,
          controls: {
            ...state.controls,
            ...newControls,
          },
        })),

      // Add any default values for app-wide state here
      // e.g. game start logic, points/score, etc
      // gameStarted: true,
      // points: 100,
    })

    // END: Optional persist
    // )
  )
);

export default useStore;
