import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { PreloadScene } from '../scene/PreloadScene';
import { MainScene } from '../scene/MainScene';

export class GameApplication {
  private game!: Phaser.Game

  constructor() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: GAME_CONFIG.width,
      height: GAME_CONFIG.height,
      scene: [PreloadScene, MainScene]
    })
  }

  start() {

  }
}