# Front-End boilerplate build with Vite

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [Houston](https://eduzz.github.io/houston/inicio).

- [Front-End boilerplate build with Vite](#front-end-boilerplate-build-with-vite)
  - [What is inside?](#what-is-inside)
  - [Getting Started](#getting-started)
    - [Install](#install)
    - [Lint](#lint)
    - [Build](#build)
    - [Test](#test)
  - [Generate automated components](#generate-automated-components)
  - [Some differences](#some-differences)
  - [License](#license)

## What is inside?

This project uses many tools like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Houston](https://eduzz.github.io/houston/inicio)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Getting Started

### Install

Create the project.

```bash
npx degit eduzz/reactjs-vite-boilerplate my-app
```

Access the project directory.

```bash
cd my-app
```

Install dependencies.

```bash
yarn install
```

Serve with hot reload at <http://localhost:3000>.

```bash
yarn dev
```

### Lint

```bash
yarn lint
```

### Build

```bash
yarn build
```

### Test

```bash
yarn test
```

## Generate automated components

You can generate components 40x more fast using the following command:

```bash
yarn generate ComponentName
```

This will generate a new `Component` in the `components` directory with a default `index.tsx` and `test.tsx` file.

```bash
src/components
└── Component
    ├── index.tsx
    └── test.tsx
```

That's your new component, ready to be implemented.

## Some differences

Vite exposes `env` variables on the special `import.meta.env object` (instead of `process.env object`).

Some built-in variables are available in all cases:

```ts
import.meta.env.VITE_APP_NAME
```

You can see more [here](https://vitejs.dev/guide/env-and-mode.html).

---

## License

This project is licensed under the MIT License.
