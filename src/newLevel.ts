import { Enemy } from "./enemy"
import { Ship } from "./ship"
export function newLevel(newLevel: number) {
    let enemyArr: Array<Enemy> = [
        new Enemy("command", 90, 680, "command_1", 1),
        new Enemy("command", 90, 920, "command_2", 1),
        new Enemy("flanker", 140, 600, "flanker_1", 1),
        new Enemy("flanker", 140, 680, "flanker_2", 2),
        new Enemy("flanker", 140, 760, "flanker_3", 1),
        new Enemy("flanker", 140, 840, "flanker_4", 2),
        new Enemy("flanker", 140, 920, "flanker_5", 1),
        new Enemy("flanker", 140, 1000, "flanker_6", 2),
        new Enemy("captain", 190, 520, "captain_1", 1),
        new Enemy("captain", 190, 600, "captain_2", 2),
        new Enemy("captain", 190, 680, "captain_3", 1),
        new Enemy("captain", 190, 760, "captain_4", 2),
        new Enemy("captain", 190, 840, "captain_5", 1),
        new Enemy("captain", 190, 920, "captain_6", 2),
        new Enemy("captain", 190, 1000, "captain_7", 1),
        new Enemy("captain", 190, 1080, "captain_8", 2),
        new Enemy("ensign", 240, 440, "ensign_1", 1),
        new Enemy("ensign", 240, 520, "ensign_2", 2),
        new Enemy("ensign", 240, 600, "ensign_3", 1),
        new Enemy("ensign", 240, 680, "ensign_4", 2),
        new Enemy("ensign", 240, 760, "ensign_5", 1),
        new Enemy("ensign", 240, 840, "ensign_6", 2),
        new Enemy("ensign", 240, 920, "ensign_7", 1),
        new Enemy("ensign", 240, 1000, "ensign_8", 2),
        new Enemy("ensign", 240, 1080, "ensign_9", 1),
        new Enemy("ensign", 240, 1160, "ensign_10", 1),
        new Enemy("ensign", 290, 440, "ensign_11", 2),
        new Enemy("ensign", 290, 520, "ensign_12", 1),
        new Enemy("ensign", 290, 600, "ensign_13", 2),
        new Enemy("ensign", 290, 680, "ensign_14", 1),
        new Enemy("ensign", 290, 760, "ensign_15", 2),
        new Enemy("ensign", 290, 840, "ensign_16", 1),
        new Enemy("ensign", 290, 920, "ensign_17", 2),
        new Enemy("ensign", 290, 1000, "ensign_18", 1),
        new Enemy("ensign", 290, 1080, "ensign_19", 2),
        new Enemy("ensign", 290, 1160, "ensign_20", 1)
    ]
    let divArr: Array<HTMLDivElement> = []
    let direction: string = "right"
    let ship: Ship = new Ship()
    let shipDiv: HTMLDivElement = document.createElement("div")
    if (newLevel == 2) {
        enemyArr.push(new Enemy("command", 90, 840, "command_3", 1))
    } else if (newLevel > 2) {
        enemyArr.push(new Enemy("command", 90, 840, "command_3", 1))
        enemyArr.push(new Enemy("command", 90, 760, "command_4", 1))
    }
    return ({ enemyArr, divArr, direction, ship, shipDiv })
}