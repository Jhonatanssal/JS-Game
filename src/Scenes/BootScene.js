import Phaser from 'phaser';
import bootLogo from '../assets/logogif.gif';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', bootLogo);
  }

  create() {
    this.scene.start('Preloader');
  }
}