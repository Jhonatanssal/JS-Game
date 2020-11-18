import 'phaser';
import star from '../assets/star.png';
import dude from '../assets/dude.png';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  preload () {
    this.load.image('star', star);
    this.load.image('dude', dude);
  }

  create () {
    // Images
    this.add.image(400, 80, 'star');
    this.add.image(400, 130, 'dude');

    // Title
    this.title = this.add.text(400, 250, 'Platformer', {
      fontSize: 50,
      fontStyle: 'bold',
      align: 'center',
      color: '#aaaaaa',
    });
    this.title.setOrigin(0.5, 0.5);

    // Buttons constructor
    const btn = (scene, positionX, positionY, btnDet, textSize) => {
      const btn = scene.add.text(positionX, positionY, btnDet, {
        fontSize: textSize,
      });
      btn.setOrigin(0.5, 0);
      btn.setInteractive();
      return btn;
    };

    // Play button
    this.gameButton = btn(this, 400, 330, 'Play', 35);
    this.gameButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    // Instruction button
    this.gameButton = btn(this, 400, 400, 'Instructions', 28);
    this.gameButton.on('pointerdown', () => {
      this.scene.start('Instructions');
    });

    // Leaderboard button
    this.gameButton = btn(this, 400, 445, 'LeaderBoard', 28);
    this.gameButton.on('pointerdown', () => {
      this.scene.start('LeaderBoard');
    });

    // Credits button
    this.gameButton = btn(this, 400, 490, 'Credits', 28);
    this.gameButton.on('pointerdown', () => {
      this.scene.start('Credits');
    });
  }
};