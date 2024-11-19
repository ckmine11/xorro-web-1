# Xorro Web

This is a [Next.js](https://nextjs.org) project for the Xorro web application.

## Prerequisites

- `fnm` (Fast Node Manager) - https://github.com/Schniz/fnm
- `bun` (npm/yarn replacement) - https://bun.sh
- `docker` - https://docs.docker.com/get-docker

## Setup

- Install the Node version specified in the `.nvmrc` file:

```bash
fnm use $(cat .nvmrc) --install-if-missing
```

- Run `bun i` to install the project dependencies.

## Development

- Run `bun dev` to start the development server. A new browser window will open automatically at `http://localhost:3000`.

## Unit testing

- Run `bun test` to run the unit tests. This repo doen not have any end-to-end tests.

## Linting

- Run `bun lint` to run the eslint. Although, you should have it integrated with your editor, preferably when you save a file.
- Run `bun tsc` to run the typescript checker, which is also integrated with your editor.

However, these checks run automatically when you commit and push your changes, with git hooks, and the Husky package. It's unnecessary to run them manually or only rely on CI to run them for you. It's quite a **time waster** to push code that doesn't pass these checks.

## Tutorials and assets

Additional tutorials and resources can be found in the `Tutorials` directory in our shared [NST Google Drive](https://drive.google.com/drive/u/2/folders/0AE-WAaOo4EzIUk9PVA). Assets like fonts, images, etc, can be found in the `Assets` directory as well.
# xorro-web
