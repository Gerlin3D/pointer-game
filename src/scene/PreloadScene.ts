import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload(): void {
    this.load.image('background', GAME_CONFIG.assets.background)
    this.load.spritesheet('fog', GAME_CONFIG.assets.sprite, {
      frameWidth: GAME_CONFIG.animation.frameWidth,
      frameHeight: GAME_CONFIG.animation.frameHeight,
    })
  }
    
  create() {
    this.scene.start('MainScene')
  }
}
