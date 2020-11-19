import Phaser from 'phaser';
import GameScene from '../src/Scenes/GameScene';

describe('It test the existing subclass', () => {
  it('has to be a subclass of Phaser.Scene', () => {
    expect(GameScene).toBeSubclassOf(Phaser.Scene);
  });
});