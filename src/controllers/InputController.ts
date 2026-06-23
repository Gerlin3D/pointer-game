import Phaser from 'phaser';

export class InputController {
  constructor(scene: Phaser.Scene, onPointerDown: (x: number, y: number) => void) {
    scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) =>
      onPointerDown(pointer.x, pointer.y)
    )
  }

}
