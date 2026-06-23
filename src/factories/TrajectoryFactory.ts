import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class TrajectoryFactory {
  public create(
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): Phaser.Curves.QuadraticBezier {
    const dx = endX - startX;
    const dy = endY - startY;

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    const controlX = midX - dy * GAME_CONFIG.movement.curveBend;
    const controlY = midY + dx * GAME_CONFIG.movement.curveBend;

    return new Phaser.Curves.QuadraticBezier(
      new Phaser.Math.Vector2(startX, startY),
      new Phaser.Math.Vector2(controlX, controlY),
      new Phaser.Math.Vector2(endX, endY)
    );
  }
}
