export function enemyBulletHit(bullet: HTMLDivElement, shipDiv: HTMLDivElement, hit: boolean) {
    let bulletPos = bullet.getBoundingClientRect()
    let bulletTop = bulletPos.top
    let bulletLeft = bulletPos.left
    let bulletRight = bulletPos.right
    let bulletBottom = bulletPos.bottom

    let shipPos = shipDiv.getBoundingClientRect()
    let shipTop = shipPos.top
    let shipLeft = shipPos.left
    let shipRight = shipPos.right
    let shipBottom = shipPos.bottom

    let checkHorizontal: boolean = false
    if ((bulletRight > shipLeft && bulletRight < shipRight) || (bulletLeft < shipRight && bulletLeft > shipLeft)) {
        checkHorizontal = true
    }

    let checkVertical: boolean = false
    if ((bulletTop > shipTop && shipTop < bulletBottom) || (bulletBottom > shipTop && shipBottom < bulletBottom)) {
        checkVertical = true
    }
    if (checkHorizontal && checkVertical && !hit) {
        hit = true
    }
    return (hit)
}   