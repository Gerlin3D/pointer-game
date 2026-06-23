import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class MovementController {
  private scene: Phaser.Scene;
  private target: Phaser.GameObjects.Sprite;


  constructor(scene: Phaser.Scene, target: Phaser.GameObjects.Sprite) {
    this.scene = scene;
    this.target = target
  }

  public moveTo(x: number, y: number): void {
    const distance = Phaser.Math.Distance.Between(
      this.target.x, this.target.y, x, y
    );

    const rawDuration = distance / GAME_CONFIG.movement.speed;

    const duration = Phaser.Math.Clamp(
      rawDuration,
      GAME_CONFIG.movement.minDuration,
      GAME_CONFIG.movement.maxDuration
    );

    this.scene.tweens.add({
      targets: this.target,
      x: x,
      y: y,
      duration: duration,
    });
  }
}
