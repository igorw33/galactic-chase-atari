import { Enemy } from "./enemy"

export function enemyHit(divArr: Array<HTMLDivElement>, bullet: HTMLDivElement, enemyArr: Array<Enemy>, hit: boolean) {
    let bulletPos = bullet.getBoundingClientRect()
    let bulletTop = bulletPos.top
    let bulletLeft = bulletPos.left
    let bulletRight = bulletPos.right
    let bulletBottom = bulletPos.bottom

    let addToScore: number = 0
    divArr.forEach(element => {
        let enemyPos = element.getBoundingClientRect()
        let enemyTop = enemyPos.top
        let enemyLeft = enemyPos.left
        let enemyRight = enemyPos.right
        let enemyBottom = enemyPos.bottom

        let checkHorizontal: boolean = false
        if ((bulletRight > enemyLeft && bulletRight < enemyRight) || (bulletLeft < enemyRight && bulletLeft > enemyLeft)) {
            checkHorizontal = true
        }

        let checkVertical: boolean = false
        if ((enemyTop > bulletTop && bulletTop < enemyBottom) || (enemyBottom > bulletTop && bulletBottom < enemyBottom)) {
            checkVertical = true
        }

        if (checkHorizontal && checkVertical && !hit) {
            hit = true
            if (enemyArr[divArr.indexOf(element)].type == "command") {
                addToScore = 50
            } else if (enemyArr[divArr.indexOf(element)].type == "flanker") {
                addToScore = 40
            } else if (enemyArr[divArr.indexOf(element)].type == "captain") {
                addToScore = 30
            } else if (enemyArr[divArr.indexOf(element)].type == "ensign") {
                addToScore = 20
            }
            if (enemyArr[divArr.indexOf(element)].formation == false) {
                addToScore = addToScore * 2
            }
            enemyArr.splice(divArr.indexOf(element), 1)
            divArr.splice(divArr.indexOf(element), 1)

            let counter = 1
            element.innerHTML = ""
            let explosionImg: HTMLImageElement = document.createElement("img")
            explosionImg.src = "gfx/destroy" + counter + ".png"
            explosionImg.classList.add("icon")
            element.appendChild(explosionImg)
            counter = 2
            let destroyInterval = setInterval(() => {
                if (counter > 3) {
                    document.body.removeChild(element)
                    clearInterval(destroyInterval)
                } else {
                    let explosionSound = document.createElement("AUDIO");
                    explosionSound.setAttribute("src", "audio/explosion.mp3")
                    explosionSound.setAttribute("controls", "controls");
                    explosionSound.setAttribute("autoplay", "autoplay");
                    explosionSound.style.position = "absolute"
                    explosionSound.style.left = "-9999px"
                    
                    element.innerHTML = ""
                    let explosionImg: HTMLImageElement = document.createElement("img")
                    explosionImg.src = "gfx/destroy" + counter + ".png"
                    explosionImg.classList.add("icon")
                    element.appendChild(explosionImg)
                    counter += 1
                }
            }, 200);
            destroyInterval
        }
    })
    return ({ divArr, enemyArr, hit, addToScore })
}