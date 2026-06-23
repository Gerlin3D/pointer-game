import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { PreloadScene } from '../scene/PreloadScene';
import { MainScene } from '../scene/MainScene';
import { ViewportController } from '../controllers/ViewportController';

export class GameApplication {
  private game!: Phaser.Game

  constructor() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      scale: ViewportController.getScaleConfig(),
      scene: [PreloadScene, MainScene],
    });
  }

  start() {

  }
}