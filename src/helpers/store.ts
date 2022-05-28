import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type Controls = {
  confirm: boolean;
  left: boolean;
  right: boolean;
};

export interface AppState {
  controls: Controls;
  setControls: (controls: Partial<Controls>) => void;

  score: number;
  addScore: (controls: number) => void;
}

export const useStore = create<AppState>()(
  devtools((set) => ({
    controls: {
      confirm: false,
      left: false,
      right: false,
    },
    setControls: (controls) =>
      set((state) => ({
        controls: {
          ...state.controls,
          ...controls,
        },
      })),
    score: 0,
    addScore: (points) =>
      set((state) => ({
        ...state,
        score: state.score + points,
      })),
  }))
);

export default useStore;
