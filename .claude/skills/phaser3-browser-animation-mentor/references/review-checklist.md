# Review Checklist

## Architecture

- Does each class have one clear responsibility?
- Is `MainScene` mostly composition rather than a god object?
- Are pure calculations separated from framework code?
- Are dependencies passed explicitly where practical?
- Is a new class actually justified?

## TypeScript

- Are configuration objects typed?
- Are mutable and immutable fields distinguished?
- Are nullable values handled?
- Are unsafe type assertions avoided?
- Are browser API results checked?
- Are string strategies modeled with literal unions when appropriate?

## Phaser

- Are asset keys centralized?
- Is the animation registered once?
- Is the active tween tracked?
- Is the previous tween stopped before replacement?
- Are input listeners removed?
- Is scene shutdown handled?
- Are actor coordinates logical rather than CSS-based?

## Movement

- Is the target clamped using actor dimensions?
- Does the actor remain fully visible?
- Is duration based on distance?
- Are very short moves handled?
- Is the path deterministic enough to debug?
- Can a new input interrupt movement cleanly?

## Scaling

- Does the logical world remain `1000 × 600`?
- Is the desktop display capped at `1280 × 768`?
- Is scaling based on the smaller available ratio?
- Is the game centered?
- Do pointer coordinates remain correct after resize?
- Is orientation change tested?

## Fullscreen

- Is the request triggered by a user gesture?
- Is rejection handled?
- Is unsupported behavior detected?
- Is pseudo-fullscreen documented?
- Does resize occur after state changes?
- Does the app remain usable after exit?

## Compatibility

- Does the build target match the requirement?
- Are polyfills intentional rather than blindly imported?
- Is every modern browser API justified?
- Has the installed Phaser version been checked?
- Are unsupported requirements documented honestly?

## Documentation

- Is the current architecture documented?
- Are configuration parameters explained?
- Are known limitations listed?
- Is the browser matrix updated?
- Can another developer run the project from the README?
