# React Window Hooks

[![NPM](https://img.shields.io/npm/v/@better-hooks/window.svg)](https://www.npmjs.com/package/@better-hooks/window)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-hooks/window)
![npm type definitions](https://img.shields.io/npm/types/@better-hooks/window)
![NPM](https://img.shields.io/npm/l/@better-hooks/window)
![npm](https://img.shields.io/npm/dm/@better-hooks/window)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-window-hooks?style=social)

> Handle window events and observe window size

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: Observe window size
- 🪗 Lifecycle window events handling

## Install

```bash
npm install --save @better-hooks/window
```

or

```bash
yarn add @better-hooks/window
```

## useWindowEvent

```tsx
import React from "react";
import { useWindowEvent } from "@better-hooks/window";

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
import { useWindowEvent } from "@better-hooks/window";

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
import { useWindowSize } from "@better-hooks/window";

const MyComponent: React.FC = () => {
  // Updates with resizing
  const [width, height] = useWindowSize()

  return (
    // ...
  )
}

```
