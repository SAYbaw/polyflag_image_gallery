input.onButtonPressed(Button.A, function () {
    if (flag == 0) {
        flag = 3
    } else {
        flag += -1
    }
    if (flag == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (flag == 1) {
        basic.showIcon(IconNames.House)
    } else if (flag == 2) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
input.onButtonPressed(Button.B, function () {
    if (flag == 3) {
        flag = 0
    } else {
        flag += 1
    }
    if (flag == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (flag == 1) {
        basic.showIcon(IconNames.House)
    } else if (flag == 2) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
let flag = 0
flag = 0
