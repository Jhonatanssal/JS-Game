import Phaser from 'phaser';
import config from './Config/config';
import BootScene from './Scenes/BootScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import GameScene from './Scenes/GameScene';
import LeaderBoardScene from './Scenes/LeaderBoardScene';
import InstructionsScene from './Scenes/OptionsScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Instructions', InstructionsScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();