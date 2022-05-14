import create from 'zustand'
import { devtools, persist } from "zustand/middleware"

const controls = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  shoot: false,
}
export type Controls = typeof controls
type Control = keyof Controls
type ControlActions = Record<Control, (v: boolean) => void>
type Actions = ControlActions

export interface GameState {
  router: any;
  dom: any;

  // Controls
  controls: Controls;
  actions: Actions

  // Player
  health: number;
}

export const useStore = create<GameState>()(
  devtools(
    persist((set) => {
      
      const controlActions = Object.keys(controls).reduce((o, control) => {
        o[control] = (value: boolean) => set((state) => ({ controls: { ...state.controls, [control]: value } }))
        return o
      }, {} as ControlActions)

      return ({
        router: null,
        dom: null,

        // Controls
        controls,
        setforward: (value) => set((state) => ({ controls: { ...state.controls, forward: value } })),
        setbackward: (value) => set((state) => ({ controls: { ...state.controls, backward: value } })),
        setleft: (value) => set((state) => ({ controls: { ...state.controls, left: value } })),
        setright: (value) => set((state) => ({ controls: { ...state.controls, right: value } })),
        setshoot: (value) => set((state) => ({ controls: { ...state.controls, shoot: value } })),
        

        // Player
        health: 100,
      })
    })
  )
)


export default useStore
