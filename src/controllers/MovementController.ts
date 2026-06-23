import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';
import { BoundsService } from '../services/BoundsService';
import { TrajectoryFactory } from '../factories/TrajectoryFactory';

export class MovementController {
  private scene: Phaser.Scene;
  private target: Phaser.GameObjects.Sprite;
  private bounds: BoundsService;
  private trajectory: TrajectoryFactory


  constructor(scene: Phaser.Scene, target: Phaser.GameObjects.Sprite, bounds: BoundsService, trajectory: TrajectoryFactory) {
    this.scene = scene;
    this.target = target;
    this.bounds = bounds;
    this.trajectory = trajectory;
  }

  public moveTo(x: number, y: number): void {
    const halfWidth = this.target.displayWidth / 2 - GAME_CONFIG.movement.edgePaddingWidth;
    const halfHeight = this.target.displayHeight / 2 - GAME_CONFIG.movement.edgePaddingHeight;
    const target = this.bounds.clamp(x, y, halfWidth, halfHeight);

    const distance = Phaser.Math.Distance.Between(
      this.target.x, this.target.y, target.x, target.y
    );

    const rawDuration = distance / GAME_CONFIG.movement.speed;


    const duration = Phaser.Math.Clamp(
      rawDuration,
      GAME_CONFIG.movement.minDuration,
      GAME_CONFIG.movement.maxDuration
    );

    const curve = this.trajectory.create(this.target.x, this.target.y, target.x, target.y);
    const follower = { t: 0 };

    this.scene.tweens.add({
      targets: follower,
      t: 1,
      onUpdate: () => {
        const point = curve.getPoint(follower.t);
        this.target.setPosition(point.x, point.y);
      },
      duration: duration,
    });
  }
}
