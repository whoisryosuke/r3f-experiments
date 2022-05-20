# r3f-next-starter

This is a batteries included template for using React Three Fiber (R3F) with NextJS 🔋. Based on [create-r3f-app](https://github.com/utsuboco/create-r3f-app).

## Features

- ♻ Easily mix DOM and 3D Canvas
- 🎨 Fragment and Vertex Shaders (with syntax highlighting)
- 🎛 [Leva](https://github.com/pmndrs/leva) panel for debugging
- ♿ [R3F A11y](https://github.com/pmndrs/react-three-a11y)
- 🏪 [Zustand](https://github.com/pmndrs/zustand) store
- 📁 Relative paths (`@/components/`)
- 📴 Offline mode
- 🍱 Bundle Analyzer
- 👕 ESLint and Prettier
- ☑ Typescript

## Getting Started

1. Clone this repo: `git clone https://github.com/whoisryosuke/r3f-next-starter.git`
1. Install dependencies: `yarn`
1. Run the development server: `yarn dev`
1. See the site here 👀: http://localhost:3000/

### CodeSandbox

You can also [preview and fork on CodeSandbox](https://githubbox.com/whoisryosuke/r3f-next-starter)

### Lint and Code Formatting

If you use VSCode, Prettier should run each time you save a compatible file.

`yarn lint` runs ESLint and Prettier, automatically formats files and rewrites them. Make sure to stage your code before running just in case.

### Upgrading to latest

1. `yarn upgrade-interactive --latest`

> Please note that when you update a major version, you should check the dependency's documentation to see if there are any necessary changes to make to app or dependency API.

## How to use

### DOM vs R3F

When you create a new page, you don't need to wrap anything in a canvas. This automatically happens in the `_app.jsx` file.

Each page should export `<DOM />` and `<R3f r3f />` components. The `partition` script in `_app.jsx` checks for these, and wraps your R3F components in the canvas.

### Where is Canvas?

The `<Canvas>` is located in `src\components\layout\canvas.jsx`. You can add any components here you want to share across all scenes (like a similar camera, lighting, etc).

### Importing R3F components

The rule is: you have to dynamically import any React component that uses ThreeJS/R3F components if it's the **top-level one**. Once you dynamically import that React component -- it can contain other ThreeJS/R3F component without dynamic imports.

See the `/pages/` and `/components/canvas/` for examples.

## Tips

### Syntax Highlighting for Shaders

When you browse the shaders (`.frag` and `.vert`) in VSCode, you should see a popup to install a plugin for highlighting.

There's a few, but we recommend [Shader languages support for VS Code](https://marketplace.visualstudio.com/items?itemName=slevesque.shader).

## Typescript Guide

Check out [our guide on using R3F with Typescript.](./docs/typescript.md)

## Credits

- [NextJS ThreeJS/R3F Example](https://github.com/vercel/next.js/tree/canary/examples/with-three-js)
- [create-r3f-app](https://github.com/utsuboco/create-r3f-app)
- [Poimandres](https://github.com/pmndrs/)
