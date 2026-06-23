import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { AnimatedActor } from '../actors/AnimatedActor';
import { MovementController } from '../controllers/MovementController';
import { InputController } from '../controllers/InputController';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }



  create() {
    this.add.image(GAME_CONFIG.width / 2, GAME_CONFIG.height / 2, 'background');
    const actor = new AnimatedActor(this, GAME_CONFIG.width / 2, GAME_CONFIG.height / 2);
    const movement = new MovementController(this, actor.gameObject);
    new InputController(this, (x, y) => movement.moveTo(x, y));
  }
}