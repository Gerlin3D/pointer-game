
export const GAME_CONFIG = {
    width: 1000,
    height: 600,
    assets: {
      background: 'assets/images/Magic_Field.webp',
      sprite: 'assets/sprites/fog-idle-spritesheet.png',
    },
    animation: {
      frameWidth: 400,
      frameHeight: 400,
      frameCount: 8,
      fps: 10,
    }
} as const