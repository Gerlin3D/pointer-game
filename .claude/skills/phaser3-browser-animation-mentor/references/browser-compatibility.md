# Browser Compatibility Reference

## Compatibility layers

Treat compatibility as four separate questions.

### 1. Syntax

Can the browser parse the generated JavaScript?

Examples:

- `const`;
- arrow functions;
- classes;
- async functions;
- optional chaining.

Handled by transpilation.

### 2. Runtime APIs

Does the browser provide required JavaScript objects and methods?

Examples:

- `Promise`;
- `Map`;
- `Set`;
- `Symbol`;
- `Object.assign`;
- `Array.prototype.includes`;
- `fetch`.

Handled through polyfills only when practical.

### 3. Browser APIs

Does the browser support the required platform feature?

Examples:

- Fullscreen API;
- Pointer Events;
- ResizeObserver;
- Visual Viewport API;
- WebGL.

May require feature detection, fallback behavior, or documentation.

### 4. Library support

Does the installed Phaser version itself support the browser?

Transpiling project code cannot repair a library that assumes unsupported browser behavior.

## IE11 policy

Do not promise IE11 compatibility before a minimal spike has been tested.

Possible requirements include:

- ES5-compatible output;
- non-module bundle;
- runtime polyfills;
- CSS fallbacks;
- renderer fallback;
- avoiding unsupported APIs;
- pinning an older Phaser version.

If the cost becomes disproportionate, report it clearly.

## Fullscreen policy

Fullscreen requests require a user gesture.

Always handle a rejected promise or unsupported API.

On unsupported mobile Safari environments:

- maximize the parent container;
- prevent page scrolling around the game;
- center the canvas;
- use viewport-aware sizing;
- document that this is not identical to native fullscreen.

## Browser test matrix

At minimum, document results for:

- current Chrome desktop;
- current Firefox desktop;
- current Safari mobile;
- current Chrome Android;
- IE11 or an agreed legacy test environment;
- fullscreen supported;
- fullscreen fallback;
- WebGL renderer;
- Canvas fallback where relevant.
