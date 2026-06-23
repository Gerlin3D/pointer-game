
export const GAME_CONFIG = {
  width: 1000,
  height: 600,
  assets: {
    background: 'assets/images/Magic_Field.webp',
    sprite: 'assets/sprites/forest-fog-spritesheet.png',
  },
  animation: {
    frameWidth: 400,
    frameHeight: 400,
    frameCount: 8,
    fps: 6,
  },
  movement: {
    speed: 0.5,
    minDuration: 200,
    maxDuration: 1200,
    edgePaddingHeight: 30,
    edgePaddingWidth: 0,
    curveBend: 0.3,
  },
  viewport: {
    parentId: 'game-container',
    desktopMaxWidth: 1280,
    desktopMaxHeight: 768,
  }
} as const