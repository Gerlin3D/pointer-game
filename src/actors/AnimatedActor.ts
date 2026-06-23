import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class AnimatedActor {
  private sprite: Phaser.GameObjects.Sprite

  constructor(scene: Phaser.Scene, x: number, y: number) {
    scene.anims.create ({
      key: 'fog-idle',
      frames: scene.anims.generateFrameNumbers('fog', { start: 0, end: GAME_CONFIG.animation.frameCount - 1 }),
      frameRate: GAME_CONFIG.animation.fps,
      repeat: -1,
    });
    this.sprite = scene.add.sprite(x, y, 'fog');
    this.sprite.play('fog-idle');
  }

  public get gameObject(): Phaser.GameObjects.Sprite {
    return this.sprite;
  }


}