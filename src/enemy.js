"use strict";
exports.__esModule = true;
exports.Enemy = void 0;
var Enemy = /** @class */ (function () {
    function Enemy(type, top, left, id, sprite) {
        this.formation = true;
        this.leavingFormation = false;
        this.returningToFormation = false;
        this.speed = 0;
        this.type = type;
        this.top = top;
        this.left = left;
        this.id = id;
        this.sprite = sprite;
    }
    return Enemy;
}());
exports.Enemy = Enemy;
