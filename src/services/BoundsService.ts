import Phaser from 'phaser';

export class BoundsService {
  private fieldWidth: number;
  private fieldHeight: number;

  constructor(fieldWidth: number, fieldHeight: number) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
  }

  clamp(x: number, y: number, halfWidth: number, halfHeight: number): { x: number; y: number } {
    const clampedX = Phaser.Math.Clamp(x, halfWidth, this.fieldWidth - halfWidth)
    const clampedY = Phaser.Math.Clamp(y, halfHeight, this.fieldHeight - halfHeight)
    return { x: clampedX, y: clampedY }
  }
}
