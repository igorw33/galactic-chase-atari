"use strict";
exports.__esModule = true;
exports.enemyBulletHit = void 0;
function enemyBulletHit(bullet, shipDiv, hit) {
    var bulletPos = bullet.getBoundingClientRect();
    var bulletTop = bulletPos.top;
    var bulletLeft = bulletPos.left;
    var bulletRight = bulletPos.right;
    var bulletBottom = bulletPos.bottom;
    var shipPos = shipDiv.getBoundingClientRect();
    var shipTop = shipPos.top;
    var shipLeft = shipPos.left;
    var shipRight = shipPos.right;
    var shipBottom = shipPos.bottom;
    var checkHorizontal = false;
    if ((bulletRight > shipLeft && bulletRight < shipRight) || (bulletLeft < shipRight && bulletLeft > shipLeft)) {
        checkHorizontal = true;
    }
    var checkVertical = false;
    if ((bulletTop > shipTop && shipTop < bulletBottom) || (bulletBottom > shipTop && shipBottom < bulletBottom)) {
        checkVertical = true;
    }
    if (checkHorizontal && checkVertical && !hit) {
        hit = true;
    }
    return (hit);
}
exports.enemyBulletHit = enemyBulletHit;
