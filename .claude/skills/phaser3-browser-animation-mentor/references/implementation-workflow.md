# Implementation Workflow

## Stage workflow

For each stage:

1. State the observable result.
2. Explain the required concepts.
3. Identify the owning class.
4. Identify the minimum file changes.
5. Give pseudocode.
6. Give the user one implementation task.
7. Review the user's attempt.
8. Verify in the browser.
9. Record relevant decisions in documentation.
10. Move to the next stage only after the Definition of Done is met.

## Compatibility spike

The first implementation stage should prove only:

- the project builds;
- Phaser starts;
- a canvas appears;
- the logical size is `1000 × 600`;
- the selected Phaser version works in the primary browser;
- the chosen legacy build approach can be tested.

Do not add final architecture during the spike.

The spike may be temporary and later refactored.

## Example bounded tasks

Good:

- create the typed layout configuration;
- initialize a Phaser game using the existing config;
- load one background asset;
- define one animation from the loaded frames;
- implement a pure clamp function;
- stop the currently active tween before starting another.

Too large:

- implement the complete application;
- create all scenes, controllers, services, and tests;
- add input, movement, fullscreen, and scaling at once;
- rewrite the architecture from scratch.

## Decision records

For non-obvious choices, ask the user to record:

- decision;
- reason;
- alternatives;
- consequences.

Examples:

- Phaser instead of PixiJS;
- Webpack/Babel instead of a modern-only build;
- latest-pointer-wins strategy;
- quadratic Bézier instead of a physics path;
- fixed logical resolution instead of responsive world coordinates.
