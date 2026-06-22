# Project Context

## Product

A browser-based TypeScript application built with Phaser 3.

The application displays:

- a background image covering a logical `1000 × 600` game world;
- a looping animated object in the center;
- at least five animation frames;
- an animated object with a minimum visual size of `400 × 400`.

The object moves smoothly toward the user's mouse click or touch position.

The preferred movement path is nonlinear.

## Core user flow

1. The user opens the page.
2. Assets load.
3. The background appears.
4. The animated actor appears at the center.
5. The frame animation loops.
6. The user clicks or touches the game.
7. The actor moves toward the target.
8. A later input interrupts the current movement and becomes the new target.
9. The application remains usable after resize, orientation changes, fullscreen transitions, and repeated input.

## Non-functional requirements

- TypeScript;
- object-oriented design;
- configurable dynamic parameters;
- desktop and mobile browsers;
- centered responsive scaling;
- desktop maximum display size `1280 × 768`;
- mobile fit to available viewport;
- fullscreen request after the first eligible mobile gesture;
- documented fallback where true fullscreen is unavailable;
- explicit investigation of IE11 compatibility.

## Learning goal

The user must understand the implementation.

Claude must not become an autonomous code generator.

The project should demonstrate:

- scene lifecycle;
- game object ownership;
- dependency boundaries;
- pointer input;
- tween lifecycle;
- safe bounds;
- responsive canvas layout;
- browser capability detection;
- practical OOP rather than class creation for its own sake.
