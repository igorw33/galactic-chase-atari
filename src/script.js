"use strict";
exports.__esModule = true;
exports.bulletHitHandle = exports.Game = void 0;
var enemy_1 = require("./enemy");
var ship_1 = require("./ship");
var enemyHit_1 = require("./enemyHit");
var enemyAttack_1 = require("./enemyAttack");
var newLevel_1 = require("./newLevel");
var playerHit_1 = require("./playerHit");
var enemyBulletHit_1 = require("./enemyBulletHit");
var Game = /** @class */ (function () {
    function Game() {
        this.enemyArr = [
            new enemy_1.Enemy("command", 90, 680, "command_1", 1),
            new enemy_1.Enemy("command", 90, 920, "command_2", 1),
            new enemy_1.Enemy("flanker", 140, 600, "flanker_1", 1),
            new enemy_1.Enemy("flanker", 140, 680, "flanker_2", 2),
            new enemy_1.Enemy("flanker", 140, 760, "flanker_3", 1),
            new enemy_1.Enemy("flanker", 140, 840, "flanker_4", 2),
            new enemy_1.Enemy("flanker", 140, 920, "flanker_5", 1),
            new enemy_1.Enemy("flanker", 140, 1000, "flanker_6", 2),
            new enemy_1.Enemy("captain", 190, 520, "captain_1", 1),
            new enemy_1.Enemy("captain", 190, 600, "captain_2", 2),
            new enemy_1.Enemy("captain", 190, 680, "captain_3", 1),
            new enemy_1.Enemy("captain", 190, 760, "captain_4", 2),
            new enemy_1.Enemy("captain", 190, 840, "captain_5", 1),
            new enemy_1.Enemy("captain", 190, 920, "captain_6", 2),
            new enemy_1.Enemy("captain", 190, 1000, "captain_7", 1),
            new enemy_1.Enemy("captain", 190, 1080, "captain_8", 2),
            new enemy_1.Enemy("ensign", 240, 440, "ensign_1", 1),
            new enemy_1.Enemy("ensign", 240, 520, "ensign_2", 2),
            new enemy_1.Enemy("ensign", 240, 600, "ensign_3", 1),
            new enemy_1.Enemy("ensign", 240, 680, "ensign_4", 2),
            new enemy_1.Enemy("ensign", 240, 760, "ensign_5", 1),
            new enemy_1.Enemy("ensign", 240, 840, "ensign_6", 2),
            new enemy_1.Enemy("ensign", 240, 920, "ensign_7", 1),
            new enemy_1.Enemy("ensign", 240, 1000, "ensign_8", 2),
            new enemy_1.Enemy("ensign", 240, 1080, "ensign_9", 1),
            new enemy_1.Enemy("ensign", 240, 1160, "ensign_10", 1),
            new enemy_1.Enemy("ensign", 290, 440, "ensign_11", 2),
            new enemy_1.Enemy("ensign", 290, 520, "ensign_12", 1),
            new enemy_1.Enemy("ensign", 290, 600, "ensign_13", 2),
            new enemy_1.Enemy("ensign", 290, 680, "ensign_14", 1),
            new enemy_1.Enemy("ensign", 290, 760, "ensign_15", 2),
            new enemy_1.Enemy("ensign", 290, 840, "ensign_16", 1),
            new enemy_1.Enemy("ensign", 290, 920, "ensign_17", 2),
            new enemy_1.Enemy("ensign", 290, 1000, "ensign_18", 1),
            new enemy_1.Enemy("ensign", 290, 1080, "ensign_19", 2),
            new enemy_1.Enemy("ensign", 290, 1160, "ensign_20", 1)
        ];
        this.divArr = [];
        this.direction = "right";
        this.ship = new ship_1.Ship();
        this.shipDiv = document.createElement("div");
        this.keys = {
            arrowLeft: false,
            arrowRight: false,
            arrowUp: false
        };
        this.level = 1;
        this.lifes = 2;
        this.score = 0;
        this.pointsToNewShip = 0;
        this.isDead = false;
        this.started = false;
        this.takeoffPlaying = false;
    }
    Game.prototype.generateHUD = function () {
        var HUDContainer = document.createElement("div");
        HUDContainer.id = "hud";
        HUDContainer.style.top = window.screen.height - 240 + "px";
        // HUDContainer.style.height = 110 + "px"
        document.body.appendChild(HUDContainer);
        var lifeContainer = document.createElement("div");
        lifeContainer.id = "lifeContainer";
        for (var i = 0; i < this.lifes; i++) {
            var lifeElement = document.createElement("img");
            lifeElement.src = "./gfx/life.png";
            lifeElement.classList.add("life");
            lifeContainer.appendChild(lifeElement);
        }
        HUDContainer.appendChild(lifeContainer);
        var levelContainer = document.createElement("div");
        levelContainer.id = "levelContainer";
        for (var i = 0; i < this.level; i++) {
            var levelElement = document.createElement("img");
            levelElement.src = "./gfx/level.png";
            levelElement.classList.add("level");
            levelContainer.appendChild(levelElement);
        }
        HUDContainer.appendChild(levelContainer);
        var score = document.createElement("div");
        score.id = "score";
        score.innerHTML = "000000";
        HUDContainer.appendChild(score);
    };
    Game.prototype.generateDivArrAndShip = function () {
        for (var i = 0; i < this.enemyArr.length; i++) {
            var enemyDiv = document.createElement("div");
            var enemyImg = document.createElement("img");
            enemyImg.src = "./gfx/" + this.enemyArr[i].type + this.enemyArr[i].sprite + ".png";
            enemyImg.classList.add("icon");
            enemyDiv.classList.add("enemy");
            enemyDiv.style.left = this.enemyArr[i].left + "px";
            enemyDiv.style.top = this.enemyArr[i].top + "px";
            enemyDiv.id = this.enemyArr[i].id;
            // enemyDiv.style.background = "red"
            enemyDiv.appendChild(enemyImg);
            this.divArr.push(enemyDiv);
            document.body.appendChild(enemyDiv);
        }
        var shipDiv = document.createElement("div");
        var shipImg = document.createElement("img");
        shipImg.src = "./gfx/ship1.png";
        shipImg.classList.add("icon");
        shipDiv.id = "ship";
        shipDiv.style.left = this.ship.left + "px";
        shipDiv.style.top = this.ship.top + "px";
        // shipDiv.style.background = "blue"
        this.shipDiv = shipDiv;
        document.body.appendChild(shipDiv);
        shipDiv.appendChild(shipImg);
    };
    return Game;
}());
exports.Game = Game;
var start = document.createElement("img");
start.src = "gfx/startScreen.png";
start.id = "start";
start.onclick = function () {
    game.generateDivArrAndShip();
    game.generateHUD();
    game.started = true;
    var backgroundSound = document.createElement("AUDIO");
    backgroundSound.setAttribute("src", "audio/background.mp3");
    backgroundSound.setAttribute("controls", "controls");
    backgroundSound.setAttribute("autoplay", "autoplay");
    backgroundSound.setAttribute("loop", "loop");
    backgroundSound.style.position = "absolute";
    backgroundSound.style.left = "-9999px";
    document.body.removeChild(document.getElementById("start"));
};
document.body.appendChild(start);
var game = new Game();
setInterval(function () {
    if (game.enemyArr.length == 0 && !game.isDead) {
        game.enemyArr.push(new enemy_1.Enemy("command", -200, -200, "command_1", 1));
        setTimeout(function () {
            game.enemyArr = [];
            game.level = game.level + 1;
            game.isDead = false;
            var newLev = document.createElement("img");
            newLev.src = "./gfx/level.png";
            newLev.classList.add("level");
            document.getElementById("levelContainer").appendChild(newLev);
            var oldShip = game.shipDiv;
            var newParams = (0, newLevel_1.newLevel)(game.level);
            game.enemyArr = newParams.enemyArr;
            game.divArr = newParams.divArr;
            game.ship = newParams.ship;
            game.direction = newParams.direction;
            game.shipDiv = newParams.shipDiv;
            oldShip.parentNode.removeChild(oldShip);
            game.generateDivArrAndShip();
        }, 3000);
    }
    else if (game.started && game.divArr.length != 0) {
        var falls = Math.floor(Math.random() * 1000);
        if (falls < 50 + (game.level * 3) && game.divArr.length > 0) {
            var fallingEnemy = game.enemyArr[Math.floor(Math.random() * game.enemyArr.length)];
            if (fallingEnemy.formation) {
                fallingEnemy.formation = false;
                fallingEnemy.leavingFormation = true;
                var takeoff = document.getElementById("takeoff");
                if (!game.takeoffPlaying) {
                    takeoff.play();
                    game.takeoffPlaying = true;
                }
                else if (game.takeoffPlaying) {
                    takeoff.pause();
                    takeoff.currentTime = 0;
                    takeoff.play();
                }
            }
        }
        game.enemyArr.forEach(function (element) {
            var left = element.left;
            if (left <= 0) {
                game.direction = "right";
            }
            if (left >= window.screen.width - 60) {
                game.direction = "left";
            }
        });
        // let counter: number = 0
        game.divArr.forEach(function (element) {
            var counter = game.divArr.indexOf(element);
            var oldLeft = game.enemyArr[counter].left;
            if (game.direction == "left") {
                // let oldLeft: number = parseInt(element.style.left.slice(0, -2))
                if (game.enemyArr[game.divArr.indexOf(element)].formation) {
                    element.style.left = oldLeft - 5 + "px";
                }
                game.enemyArr[counter].left = oldLeft - 5;
            }
            else if (game.direction == "right") {
                // let oldLeft: number = parseInt(element.style.left.slice(0, -2))
                if (game.enemyArr[game.divArr.indexOf(element)].formation) {
                    element.style.left = oldLeft + 5 + "px";
                }
                game.enemyArr[counter].left = oldLeft + 5;
            }
            if (!game.enemyArr[counter].formation && !game.enemyArr[counter].returningToFormation) {
                var oldTop = parseInt(element.style.top.slice(0, -2));
                var oldLeft_1 = parseInt(element.style.left.slice(0, -2));
                if (oldTop > window.screen.height - 236 || oldLeft_1 <= 0 || oldLeft_1 >= window.screen.width - 60) {
                    game.enemyArr[game.divArr.indexOf(element)].returningToFormation = true;
                    element.innerHTML = "";
                    var enemyImg = document.createElement("img");
                    enemyImg.src = "./gfx/" + game.enemyArr[game.divArr.indexOf(element)].type + game.enemyArr[game.divArr.indexOf(element)].sprite + ".png";
                    enemyImg.classList.add("icon");
                    element.appendChild(enemyImg);
                    element.style.top = 0 + "px";
                }
                else {
                    var fallingDiv = element;
                    var fallingEnemy = game.enemyArr[counter];
                    (0, enemyAttack_1.enemyAttack)(fallingEnemy, fallingDiv, oldTop, game.shipDiv, oldLeft_1);
                    var hit = false;
                    hit = (0, playerHit_1.playerHit)(fallingDiv, game.shipDiv, hit);
                    if (hit && !game.isDead) {
                        var counter_1 = 1;
                        game.shipDiv.innerHTML = "";
                        var explosionImg = document.createElement("img");
                        explosionImg.src = "gfx/destroy" + counter_1 + ".png";
                        explosionImg.classList.add("icon");
                        game.shipDiv.appendChild(explosionImg);
                        counter_1 = 2;
                        var destroyInterval_1 = setInterval(function () {
                            game.shipDiv.innerHTML = "";
                            var explosionImg = document.createElement("img");
                            explosionImg.src = "gfx/destroy" + counter_1 + ".png";
                            explosionImg.classList.add("icon");
                            game.shipDiv.appendChild(explosionImg);
                            if (counter_1 > 2) {
                                game.shipDiv.innerHTML = "";
                                clearInterval(destroyInterval_1);
                            }
                            counter_1 += 1;
                        }, 200);
                        destroyInterval_1;
                        game.lifes = game.lifes - 1;
                        var explosionSound = document.createElement("AUDIO");
                        explosionSound.setAttribute("src", "audio/explosion.mp3");
                        explosionSound.setAttribute("controls", "controls");
                        explosionSound.setAttribute("autoplay", "autoplay");
                        explosionSound.style.position = "absolute";
                        explosionSound.style.left = "-9999px";
                        var list = document.getElementById("lifeContainer");
                        if (list.hasChildNodes()) {
                            list.removeChild(list.children[0]);
                        }
                        game.isDead = true;
                        setTimeout(function () {
                            if (game.lifes > -1) {
                                game.isDead = false;
                                var shipDiv = document.createElement("div");
                                var shipImg = document.createElement("img");
                                shipImg.src = "./gfx/ship1.png";
                                shipImg.classList.add("icon");
                                shipDiv.id = "ship";
                                game.ship.left = Math.floor(Math.random() * (window.screen.width - 60));
                                shipDiv.style.left = game.ship.left + "px";
                                shipDiv.style.top = game.ship.top + "px";
                                game.shipDiv = shipDiv;
                                document.body.appendChild(shipDiv);
                                shipDiv.appendChild(shipImg);
                            }
                            else {
                                alert("Koniec gry! Twój wynik wynosi " + game.score);
                                location.reload();
                            }
                        }, 2500);
                    }
                }
            }
            if (game.enemyArr[counter].returningToFormation) {
                if (element.style.top == game.enemyArr[counter].top + "px") {
                    game.enemyArr[game.divArr.indexOf(element)].formation = true;
                    game.enemyArr[game.divArr.indexOf(element)].returningToFormation = false;
                    game.enemyArr[game.divArr.indexOf(element)].speed = 0.1;
                }
                else {
                    element.style.top = parseInt(element.style.top.slice(0, -2)) + 5 + "px";
                    element.style.left = game.enemyArr[counter].left + "px";
                }
            }
        });
    }
}, 100);
setInterval(function () {
    if (game.enemyArr.length > 0 && game.started) {
        game.enemyArr.forEach(function (element) {
            if (element.sprite == 1) {
                element.sprite = 2;
            }
            else if (element.sprite == 2) {
                element.sprite = 1;
            }
            if (element.formation || (!element.formation && element.returningToFormation)) {
                document.getElementById(element.id).innerHTML = "";
                var enemyImg = document.createElement("img");
                enemyImg.src = "./gfx/" + element.type + element.sprite + ".png";
                enemyImg.classList.add("icon");
                document.getElementById(element.id).appendChild(enemyImg);
            }
        });
    }
}, 500);
document.addEventListener("keydown", function (event) {
    handleMove(event.key);
});
function handleMove(event) {
    // if (event == "ArrowLeft" || game.keys.arrowLeft) {
    //     game.keys.arrowLeft = true
    //     let oldLeft: number = parseInt(game.shipDiv.style.left.slice(0, -2))
    //     if (oldLeft >= 0) {
    //         game.shipDiv.style.left = oldLeft - 30 + "px"
    //         game.ship.left = oldLeft - 30
    //     }
    // } else if (event == "ArrowRight" || game.keys.arrowRight) {
    //     game.keys.arrowRight = true
    //     let oldLeft: number = parseInt(game.shipDiv.style.left.slice(0, -2))
    //     if (oldLeft <= 1450) {
    //         game.shipDiv.style.left = oldLeft + 30 + "px"
    //         game.ship.left = oldLeft + 30
    //     }
    // }
    if (!game.isDead && game.started) {
        if (event == "ArrowLeft") {
            game.keys.arrowLeft = true;
        }
        if (event == "ArrowRight") {
            game.keys.arrowRight = true;
        }
        if (event == "ArrowUp" && !game.keys.arrowUp) {
            if (game.ship.bullet) {
                game.keys.arrowUp = true;
                game.ship.bullet = false;
                var bullet_1 = document.createElement("div");
                bullet_1.classList.add("bullet");
                bullet_1.id = "playerBullet";
                bullet_1.style.backgroundColor = "#AD5216";
                bullet_1.style.top = game.ship.top + "px";
                bullet_1.style.left = game.ship.left + 17 + "px";
                document.body.appendChild(bullet_1);
                game.shipDiv.innerHTML = "";
                var shipImg = document.createElement("img");
                shipImg.src = "./gfx/ship2.png";
                shipImg.classList.add("icon");
                game.shipDiv.appendChild(shipImg);
                var shootSound = document.createElement("AUDIO");
                shootSound.setAttribute("src", "audio/shoot.mp3");
                shootSound.setAttribute("controls", "controls");
                shootSound.setAttribute("autoplay", "autoplay");
                shootSound.style.position = "absolute";
                shootSound.style.left = "-9999px";
                var bulletInterval_1 = setInterval(function () {
                    var oldTop = parseInt(bullet_1.style.top.slice(0, -2));
                    if (oldTop <= 0) {
                        var b = document.getElementById("playerBullet");
                        document.body.removeChild(b);
                        game.shipDiv.innerHTML = "";
                        var shipImg_1 = document.createElement("img");
                        shipImg_1.src = "./gfx/ship1.png";
                        shipImg_1.classList.add("icon");
                        game.shipDiv.appendChild(shipImg_1);
                        game.ship.bullet = true;
                        clearInterval(bulletInterval_1);
                    }
                    else {
                        bullet_1.style.top = oldTop - 12 + "px";
                        var hit = false;
                        var newArrs = (0, enemyHit_1.enemyHit)(game.divArr, bullet_1, game.enemyArr, hit);
                        //console.log(newArrs)
                        if (newArrs.hit) {
                            game.divArr = newArrs.divArr;
                            game.enemyArr = newArrs.enemyArr;
                            game.score = game.score + newArrs.addToScore;
                            game.pointsToNewShip = game.pointsToNewShip + newArrs.addToScore;
                            if (game.pointsToNewShip >= 7000) {
                                game.lifes = game.lifes + 1;
                                var newLife = document.createElement("img");
                                newLife.src = "./gfx/life.png";
                                newLife.classList.add("life");
                                document.getElementById("lifeContainer").appendChild(newLife);
                                game.pointsToNewShip = game.pointsToNewShip - 7000;
                            }
                            document.getElementById("score").innerHTML = "";
                            for (var i = 0; i < 6 - String(game.score).length; i++) {
                                document.getElementById("score").innerHTML += "0";
                            }
                            document.getElementById("score").innerHTML += game.score + "";
                            var b = document.getElementById("playerBullet");
                            document.body.removeChild(b);
                            game.shipDiv.innerHTML = "";
                            var shipImg_2 = document.createElement("img");
                            if (!game.isDead) {
                                shipImg_2.src = "./gfx/ship1.png";
                                shipImg_2.classList.add("icon");
                                game.shipDiv.appendChild(shipImg_2);
                            }
                            game.ship.bullet = true;
                            clearInterval(bulletInterval_1);
                        }
                    }
                }, 10);
                bulletInterval_1;
            }
        }
    }
}
document.addEventListener("keyup", function (event) {
    if (event.key == "ArrowLeft") {
        game.keys.arrowLeft = false;
    }
    if (event.key == "ArrowRight") {
        game.keys.arrowRight = false;
    }
    if (event.key == "ArrowUp") {
        game.keys.arrowUp = false;
    }
});
setInterval(function () {
    if (!game.isDead) {
        if (game.keys.arrowLeft && !game.keys.arrowRight) {
            var oldLeft = parseInt(game.shipDiv.style.left.slice(0, -2));
            if (oldLeft >= 0) {
                game.shipDiv.style.left = oldLeft - 5 + "px";
                game.ship.left = oldLeft - 5;
            }
        }
        else if (game.keys.arrowRight && !game.keys.arrowLeft) {
            var oldLeft = parseInt(game.shipDiv.style.left.slice(0, -2));
            if (oldLeft <= window.screen.width - 60) {
                game.shipDiv.style.left = oldLeft + 5 + "px";
                game.ship.left = oldLeft + 5;
            }
        }
    }
}, 10);
function bulletHitHandle(fallingDiv, bullet) {
    var bulletInterval = setInterval(function () {
        var oldTop = parseInt(bullet.style.top.slice(0, -2));
        if (oldTop > window.screen.height - 236) {
            document.body.removeChild(bullet);
            clearInterval(bulletInterval);
        }
        else {
            bullet.style.top = oldTop + 4 + "px";
            var hit = false;
            var isHit = (0, enemyBulletHit_1.enemyBulletHit)(bullet, game.shipDiv, hit);
            if (isHit) {
                document.body.removeChild(bullet);
                clearInterval(bulletInterval);
                if (!game.isDead) {
                    var counter_2 = 1;
                    game.shipDiv.innerHTML = "";
                    var explosionImg = document.createElement("img");
                    explosionImg.src = "gfx/destroy" + counter_2 + ".png";
                    explosionImg.classList.add("icon");
                    game.shipDiv.appendChild(explosionImg);
                    counter_2 = 2;
                    var destroyInterval_2 = setInterval(function () {
                        if (counter_2 > 3) {
                            game.shipDiv.innerHTML = "";
                            clearInterval(destroyInterval_2);
                        }
                        else {
                            game.shipDiv.innerHTML = "";
                            var explosionImg_1 = document.createElement("img");
                            explosionImg_1.src = "gfx/destroy" + counter_2 + ".png";
                            explosionImg_1.classList.add("icon");
                            game.shipDiv.appendChild(explosionImg_1);
                            counter_2 += 1;
                        }
                    }, 200);
                    destroyInterval_2;
                    game.lifes = game.lifes - 1;
                    var explosionSound = document.createElement("AUDIO");
                    explosionSound.setAttribute("src", "audio/explosion.mp3");
                    explosionSound.setAttribute("controls", "controls");
                    explosionSound.setAttribute("autoplay", "autoplay");
                    explosionSound.style.position = "absolute";
                    explosionSound.style.left = "-9999px";
                    var list = document.getElementById("lifeContainer");
                    if (list.hasChildNodes()) {
                        list.removeChild(list.children[0]);
                    }
                    game.isDead = true;
                    if (game.divArr.length > 0) {
                        setTimeout(function () {
                            if (game.lifes > -1) {
                                game.isDead = false;
                                var shipDiv = document.createElement("div");
                                var shipImg = document.createElement("img");
                                shipImg.src = "./gfx/ship1.png";
                                shipImg.classList.add("icon");
                                shipDiv.id = "ship";
                                game.ship.left = Math.floor(Math.random() * (window.screen.width - 60));
                                shipDiv.style.left = game.ship.left + "px";
                                shipDiv.style.top = game.ship.top + "px";
                                game.shipDiv = shipDiv;
                                document.body.appendChild(shipDiv);
                                shipDiv.appendChild(shipImg);
                            }
                            else {
                                alert("Koniec gry! Twój wynik wynosi " + game.score);
                                location.reload();
                            }
                        }, 2500);
                    }
                }
            }
        }
    }, 10);
    bulletInterval;
}
exports.bulletHitHandle = bulletHitHandle;
