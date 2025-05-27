export class Enemy {
    type: string
    top: number
    left: number
    id: string
    formation: boolean = true
    leavingFormation: boolean = false
    returningToFormation: boolean = false
    sprite: number
    speed: number = 0
    constructor(type: string, top: number, left: number, id: string, sprite: number) {
        this.type = type
        this.top = top
        this.left = left
        this.id = id
        this.sprite = sprite
    }
}