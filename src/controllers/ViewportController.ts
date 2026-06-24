import Phaser from 'phaser';
import { GAME_CONFIG } from '../config/gameConfig';

export class ViewportController {
  private scene: Phaser.Scene;
  private handleResize: () => void;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.handleResize = () => this.scene.scale.refresh();
    window.addEventListener('resize', this.handleResize);
    this.scene.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.destroy());
  }

  public destroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  public static getScaleConfig(): Phaser.Types.Core.ScaleConfig {
    return {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: GAME_CONFIG.viewport.parentId,
      width: GAME_CONFIG.width,
      height: GAME_CONFIG.height,
      max: {
        width: GAME_CONFIG.viewport.desktopMaxWidth,
        height: GAME_CONFIG.viewport.desktopMaxHeight,
      },
    };
  }
}
