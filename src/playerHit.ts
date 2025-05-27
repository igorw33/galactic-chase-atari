export function playerHit(fallingDiv: HTMLDivElement, shipDiv: HTMLDivElement, hit: boolean) {
    let shipPos = shipDiv.getBoundingClientRect()
    let shipTop = shipPos.top
    let shipLeft = shipPos.left
    let shipRight = shipPos.right
    let shipBottom = shipPos.bottom

    let enemyPos = fallingDiv.getBoundingClientRect()
    let enemyTop = enemyPos.top
    let enemyLeft = enemyPos.left
    let enemyRight = enemyPos.right
    let enemyBottom = enemyPos.bottom

    let checkHorizontal: boolean = false
    if ((shipRight > enemyLeft && shipRight < enemyRight) || (shipLeft < enemyRight && shipLeft > enemyLeft)) {
        checkHorizontal = true
    }

    let checkVertical: boolean = false
    if ((enemyTop > shipTop && shipTop < enemyBottom) || (enemyBottom > shipTop && shipBottom < enemyBottom)) {
        checkVertical = true
    }

    if (checkHorizontal && checkVertical && !hit) {
        hit = true
    }
    return (hit)
}