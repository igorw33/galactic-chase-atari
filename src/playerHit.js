"use strict";
exports.__esModule = true;
exports.playerHit = void 0;
function playerHit(fallingDiv, shipDiv, hit) {
    var shipPos = shipDiv.getBoundingClientRect();
    var shipTop = shipPos.top;
    var shipLeft = shipPos.left;
    var shipRight = shipPos.right;
    var shipBottom = shipPos.bottom;
    var enemyPos = fallingDiv.getBoundingClientRect();
    var enemyTop = enemyPos.top;
    var enemyLeft = enemyPos.left;
    var enemyRight = enemyPos.right;
    var enemyBottom = enemyPos.bottom;
    var checkHorizontal = false;
    if ((shipRight > enemyLeft && shipRight < enemyRight) || (shipLeft < enemyRight && shipLeft > enemyLeft)) {
        checkHorizontal = true;
    }
    var checkVertical = false;
    if ((enemyTop > shipTop && shipTop < enemyBottom) || (enemyBottom > shipTop && shipBottom < enemyBottom)) {
        checkVertical = true;
    }
    if (checkHorizontal && checkVertical && !hit) {
        hit = true;
    }
    return (hit);
}
exports.playerHit = playerHit;
