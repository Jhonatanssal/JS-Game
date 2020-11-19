import Phaser from 'phaser';
import TitleScene from '../src/Scenes/TitleScene';

describe('It test the existing subclass', () => {
  it('has to be a subclass of Phaser.Scene', () => {
    expect(TitleScene).toBeSubclassOf(Phaser.Scene);
  });
});