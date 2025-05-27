"use strict";
exports.__esModule = true;
exports.enemyHit = void 0;
function enemyHit(divArr, bullet, enemyArr, hit) {
    var bulletPos = bullet.getBoundingClientRect();
    var bulletTop = bulletPos.top;
    var bulletLeft = bulletPos.left;
    var bulletRight = bulletPos.right;
    var bulletBottom = bulletPos.bottom;
    var addToScore = 0;
    divArr.forEach(function (element) {
        var enemyPos = element.getBoundingClientRect();
        var enemyTop = enemyPos.top;
        var enemyLeft = enemyPos.left;
        var enemyRight = enemyPos.right;
        var enemyBottom = enemyPos.bottom;
        var checkHorizontal = false;
        if ((bulletRight > enemyLeft && bulletRight < enemyRight) || (bulletLeft < enemyRight && bulletLeft > enemyLeft)) {
            checkHorizontal = true;
        }
        var checkVertical = false;
        if ((enemyTop > bulletTop && bulletTop < enemyBottom) || (enemyBottom > bulletTop && bulletBottom < enemyBottom)) {
            checkVertical = true;
        }
        if (checkHorizontal && checkVertical && !hit) {
            hit = true;
            if (enemyArr[divArr.indexOf(element)].type == "command") {
                addToScore = 50;
            }
            else if (enemyArr[divArr.indexOf(element)].type == "flanker") {
                addToScore = 40;
            }
            else if (enemyArr[divArr.indexOf(element)].type == "captain") {
                addToScore = 30;
            }
            else if (enemyArr[divArr.indexOf(element)].type == "ensign") {
                addToScore = 20;
            }
            if (enemyArr[divArr.indexOf(element)].formation == false) {
                addToScore = addToScore * 2;
            }
            enemyArr.splice(divArr.indexOf(element), 1);
            divArr.splice(divArr.indexOf(element), 1);
            var counter_1 = 1;
            element.innerHTML = "";
            var explosionImg = document.createElement("img");
            explosionImg.src = "gfx/destroy" + counter_1 + ".png";
            explosionImg.classList.add("icon");
            element.appendChild(explosionImg);
            counter_1 = 2;
            var destroyInterval_1 = setInterval(function () {
                if (counter_1 > 3) {
                    document.body.removeChild(element);
                    clearInterval(destroyInterval_1);
                }
                else {
                    var explosionSound = document.createElement("AUDIO");
                    explosionSound.setAttribute("src", "audio/explosion.mp3");
                    explosionSound.setAttribute("controls", "controls");
                    explosionSound.setAttribute("autoplay", "autoplay");
                    explosionSound.style.position = "absolute";
                    explosionSound.style.left = "-9999px";
                    element.innerHTML = "";
                    var explosionImg_1 = document.createElement("img");
                    explosionImg_1.src = "gfx/destroy" + counter_1 + ".png";
                    explosionImg_1.classList.add("icon");
                    element.appendChild(explosionImg_1);
                    counter_1 += 1;
                }
            }, 200);
            destroyInterval_1;
        }
    });
    return ({ divArr: divArr, enemyArr: enemyArr, hit: hit, addToScore: addToScore });
}
exports.enemyHit = enemyHit;
