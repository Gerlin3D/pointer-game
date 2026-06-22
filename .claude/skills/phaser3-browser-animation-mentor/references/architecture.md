# Architecture Reference

## Dependency direction

Prefer this direction:

`Scene -> Controllers -> Services`

The scene composes objects.

Controllers coordinate behavior.

Services perform focused calculations or capability checks.

Entities represent game objects.

Configuration modules provide values but do not depend on game classes.

## Suggested interaction

`InputController`
receives a Phaser pointer event and sends a logical target point to
`MovementController`.

`MovementController`
asks `BoundsService` for a safe target and asks `TrajectoryFactory` for a path.

`MovementController`
owns the active tween and applies positions to `AnimatedActor`.

`ViewportController`
handles browser and Phaser scale changes.

`FullscreenController`
handles fullscreen requests and fallback state.

## Lifecycle

Controllers that subscribe to events must provide cleanup.

Typical cleanup responsibilities:

- remove Phaser input listeners;
- remove window resize listeners;
- remove orientation listeners;
- stop and remove active tweens;
- avoid callbacks after scene shutdown;
- release DOM references where applicable.

Connect cleanup to scene shutdown or destroy events.

## Practical OOP rules

Use inheritance only where the framework expects it, such as:

- a Phaser scene extending `Phaser.Scene`;
- an actor extending an appropriate Phaser game object.

Prefer composition for:

- movement;
- bounds;
- input;
- fullscreen;
- viewport calculations.

A class is justified when it has:

- a clear responsibility;
- state or lifecycle;
- behavior that belongs together;
- a meaningful test boundary.

Do not create wrapper classes that only rename one Phaser method.

## Interfaces

Use interfaces or small types at boundaries, for example:

- `Point`;
- `Bounds`;
- `MovementRequest`;
- `MovementConfig`;
- `ScaleResult`;
- `FullscreenCapabilities`.

Avoid exposing the entire Phaser scene to pure services.
