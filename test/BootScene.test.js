import Phaser from 'phaser';
import BootScene from '../src/Scenes/BootScene';

describe('It test the existing subclass', () => {
  it('has to be a subclass of Phaser.Scene', () => {
    expect(BootScene).toBeSubclassOf(Phaser.Scene);
  });
});