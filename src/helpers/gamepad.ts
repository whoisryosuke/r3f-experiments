import { createJoymap, createQueryModule, QueryModule } from "joymap"

const joymap = createJoymap({
  onPoll() {
    console.log("default poll still here")
  }
})

// Only 1 player for now - but add more here
const players = Array(1)
  .fill(0)
  .map((player, index) => {
    const gamepadModule = createQueryModule()
    joymap.addModule(gamepadModule)

    return {
      name: index,
      gamepadModule
    }
  })

// Start joymap polling
joymap.start()

export { players, joymap }
