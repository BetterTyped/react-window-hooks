# React Window Hooks

[![NPM](https://img.shields.io/npm/v/@better-typed/react-window-hooks.svg)](https://www.npmjs.com/package/@better-typed/react-window-hooks)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@better-typed/react-window-hooks)
![npm type definitions](https://img.shields.io/npm/types/@better-typed/react-window-hooks)
![NPM](https://img.shields.io/npm/l/@better-typed/react-window-hooks)
![npm](https://img.shields.io/npm/dm/@better-typed/react-window-hooks)
![GitHub stars](https://img.shields.io/github/stars/BetterTyped/react-window-hooks?style=social)

> Easy query params handling for React

- [Better Typed](https://github.com/BetterTyped)

## Features

- :rocket: Simple, fast and light
- :factory: Set, Update, Delete, Clear
- 🪗 Provider for global configs and any environment

## Install

```bash
npm install --save @better-typed/react-window-hooks
```

or

```bash
yarn add @better-typed/react-window-hooks
```

## useWindowDevice

```tsx
import React from "react";
import { useWindowDevice } from "@better-typed/react-window-hooks";

const MyComponent: React.FC = () => {
  const device = useWindowDevice()

  console.log(device.mobile() );          // 'Sony'
  console.log(device.phone() );           // 'Sony'
  console.log(device.tablet() );          // null
  console.log(device.userAgent() );       // 'Safari'
  console.log(device.os() );              // 'AndroidOS'
  console.log(device.is('iPhone') );      // false
  console.log(device.is('bot') );         // false
  console.log(device.version('Webkit') );         // 534.3
  console.log(device.versionStr('Build') );       // '4.1.A.0.562'
  console.log(device.match('playstation|xbox') ); // false

  return (
    // ...
  )
}

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
