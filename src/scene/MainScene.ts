import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.image(GAME_CONFIG.width / 2, GAME_CONFIG.height / 2, 'background')
  }

}