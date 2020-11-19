import Phaser from 'phaser';
import OptionsScene from '../src/Scenes/OptionsScene';

describe('It test the existing subclass', () => {
  it('has to be a subclass of Phaser.Scene', () => {
    expect(OptionsScene).toBeSubclassOf(Phaser.Scene);
  });
});