import { Enemy } from "./enemy";
import { playerHit } from "./playerHit";
import { bulletHitHandle } from "./script";

export function enemyAttack(fallingEnemy: Enemy, fallingDiv: HTMLDivElement, oldTop: number, shipDiv: HTMLDivElement, oldLeft: number) {
    if (fallingEnemy.leavingFormation) {
        if (parseInt(fallingDiv.style.top.slice(0, -2)) > fallingEnemy.top - 30) {
            fallingDiv.style.top = oldTop - 5 + "px"
        }
        else {
            let leftorright = Math.floor(Math.random() * 2)

            if (leftorright == 0) {
                fallingDiv.style.left = oldLeft - 20 + "px"
                fallingEnemy.speed = -3
            } else if (leftorright == 1) {
                fallingDiv.style.left = oldLeft + 20 + "px"
                fallingEnemy.speed = 3
            }
            fallingEnemy.leavingFormation = false
        }
    } else {
        fallingDiv.style.top = oldTop + 5 + "px"

        if (oldLeft > parseInt(shipDiv.style.left.slice(0, -2)) + 5 && fallingEnemy.speed > -30) {
            fallingEnemy.speed = fallingEnemy.speed - 1

        } else if (oldLeft < parseInt(shipDiv.style.left.slice(0, -2)) - 5 && fallingEnemy.speed < 30) {
            fallingEnemy.speed = fallingEnemy.speed + 1
        }
        fallingDiv.style.left = oldLeft + fallingEnemy.speed + "px"

        if (oldLeft > parseInt(shipDiv.style.left.slice(0, -2)) + 100) {
            fallingDiv.innerHTML = ""
            let enemyImg: HTMLImageElement = document.createElement("img")
            enemyImg.src = "./gfx/" + fallingEnemy.type + "_" + "right.png"
            enemyImg.classList.add("icon")
            fallingDiv.appendChild(enemyImg)
        } else if (oldLeft < parseInt(shipDiv.style.left.slice(0, -2)) - 100) {
            fallingDiv.innerHTML = ""
            let enemyImg: HTMLImageElement = document.createElement("img")
            enemyImg.src = "./gfx/" + fallingEnemy.type + "_" + "left.png"
            enemyImg.classList.add("icon")
            fallingDiv.appendChild(enemyImg)
        } else {
            fallingDiv.innerHTML = ""
            let enemyImg: HTMLImageElement = document.createElement("img")
            enemyImg.src = "./gfx/" + fallingEnemy.type + "_" + "down.png"
            enemyImg.classList.add("icon")
            fallingDiv.appendChild(enemyImg)
        }

        let shootchance = Math.floor(Math.random() * 100)
        if (shootchance < 7) {
            let bullet: HTMLDivElement = document.createElement("div")
            bullet.classList.add("bullet")
            bullet.style.backgroundColor = "#FCBC24"
            bullet.style.top = parseInt(fallingDiv.style.top.slice(0, -2)) + 27 + "px"
            bullet.style.left = parseInt(fallingDiv.style.left.slice(0, -2)) + 17 + "px"
            document.body.appendChild(bullet)
            bulletHitHandle(fallingDiv, bullet)
        }
    }
}