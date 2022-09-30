# React Window Hooks

[![NPM](https://img.shields.io/npm/v/@better-typed/react-window-hooks.svg)](https://www.npmjs.com/package/@better-typed/react-window-hooks)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-typed/react-window-hooks)
![npm type definitions](https://img.shields.io/npm/types/@better-typed/react-window-hooks)
![NPM](https://img.shields.io/npm/l/@better-typed/react-window-hooks)
![npm](https://img.shields.io/npm/dm/@better-typed/react-window-hooks)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-window-hooks?style=social)

> Handle window events and observe window size

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: Observe window size
- 🪗 Lifecycle window events handling

## Install

```bash
npm install --save @better-typed/react-window-hooks
```

or

```bash
yarn add @better-typed/react-window-hooks
```

## useWindowEvent

```tsx
import React from "react";
import { useWindowEvent } from "@better-typed/react-window-hooks";

const MyComponent: React.FC = () => {
  // Unmounts event with component lifecycle
  useWindowEvent("resize", () => {
    // ... Do something
  });

  return (
    // ...
  )
}

```

```tsx
import React from "react";
import { useWindowEvent } from "@better-typed/react-window-hooks";

const MyComponent: React.FC = () => {
  // Unmounts event with component lifecycle
  useWindowEvent("scroll", () => {
    // ... Do something
  });

  return (
    // ...
  )
}

```

## useWindowSize

```tsx
import React from "react";
import { useWindowSize } from "@better-typed/react-window-hooks";

const MyComponent: React.FC = () => {
  // Updates with resizing
  const [width, height] = useWindowSize()

  return (
    // ...
  )
}

```
