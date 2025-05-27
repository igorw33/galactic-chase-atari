const path = require('path');
module.exports = {
    entry: {
        enemy: './src/enemy.js',
        script: './src/script.js',
        enemyAttack: './src/enemyAttack.js',
        enemyBulletHit: './src/enemyBulletHit.js',
        enemyHit: './src/enemyHit.js',
        newLevel: './src/newLevel.js',
        playerHit: './src/playerHit.js',
        ship: './src/ship.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    watch: true
};
