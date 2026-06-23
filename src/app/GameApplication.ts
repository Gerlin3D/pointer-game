import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class GameApplication {
  private game!: Phaser.Game

  constructor() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: GAME_CONFIG.width,
      height: GAME_CONFIG.height,
      backgroundColor: GAME_CONFIG.backgroundColor,
      scene: [{}]
    })
  }

  start() {

  }
}