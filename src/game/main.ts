import Phaser from 'phaser';
import { GameConfig } from './config/GameConfig';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';

const scenes = [BootScene, PreloaderScene, MainMenuScene, GameScene, GameOverScene];

const config: Phaser.Types.Core.GameConfig = {
    ...GameConfig,
    scene: scenes,
};

const StartGame = (parent: string) => {
    const gameConfigWithParent: Phaser.Types.Core.GameConfig = {
        ...config,
        parent: parent,
    };
    return new Phaser.Game(gameConfigWithParent);
};

export default StartGame;
