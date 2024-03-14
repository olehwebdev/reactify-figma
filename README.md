### Reactify Figma is a boilerplate for creating Figma plugins.

[![Reactify Figma][product-screenshot]](https://github.com/olehwebdev/reactify-figma)

## Quickstart

- Run `yarn` to install dependencies.
- Run `yarn dev` to start dev server.
- Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

1. To change the UI of your plugin (the Reactjs code), start editing [App.tsx](src/app/App.tsx).  
2. To interact with the Figma API edit [FigmaPlugin.ts](./src/plugin/FigmaPlugin.ts).

[product-screenshot]: https://github.com/olehwebdev/reactify-figma/assets/10379680/3c46282c-32e1-4ddb-85b0-08586eb98401