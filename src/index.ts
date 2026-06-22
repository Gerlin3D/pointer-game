import Phaser from 'phaser';


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: '#1a1a2e',
  scene: [{}]
};


new Phaser.Game(config)
