var canvas = document.getElementById('canvasId')
var ctx = canvas.getContext('2d')
var height = canvas.clientHeight, width = canvas.clientWidth

const BRUSH_RADIUS = 25
const GRAY_COEF = 71
const MOVE_RADIUS = 5
var time = 6

var brushes = []
var set = []
var sets = []

function Move() {
    for(var brush of brushes) {
        brush.x += brush.xMoveCoef
        brush.y += brush.yMoveCoef
        if(IsOutOfRange(brush.x))
            brush.xMoveCoef = 0
        if(IsOutOfRange(brush.y))
            brush.yMoveCoef = 0
    }
}

function IsOutOfRange(value) {
    return value < -BRUSH_RADIUS*2 || value > width || value > width
}

function AddColor(inputRed, inputGreen, inputBlue){
    set.push({ red: inputRed, green: inputGreen, blue: inputBlue })
}

function AddSet(inputSet) { sets.push(inputSet) }

function AddBrushWithoutColor(inputX, inputY) {
    brushes.push({ x: inputX, y: inputY, xMoveCoef: 0, yMoveCoef: 0,
                   red: GRAY_COEF, green: GRAY_COEF, blue: GRAY_COEF })
}

function Draw() {
    for(var brush of brushes) {
        DrawBrush(brush)
    }
}

function DrawBrush(inputBrush) {
    var circle = new Path2D()
    ctx.fillStyle = "rgb(" + inputBrush.red + ", " + inputBrush.green + ", "
                                                   +  inputBrush.blue + ") "

    circle.arc(inputBrush.x + BRUSH_RADIUS, inputBrush.y + BRUSH_RADIUS,
                                            BRUSH_RADIUS, 0, 2 * Math.PI)
    ctx.fill(circle)
}

function SetColors() {
    var generatedSet = sets[GetRandInRange(0, sets.length - 1)]
    var brushIndex = 0
    var brush
    for(var color of generatedSet) {
        if(brushIndex <= brushes.length - 1){
            brush = brushes[brushIndex++]
            brush.red = color.red
            brush.green = color.green
            brush.blue = color.blue
        }
    }
}

function GenerateMoveCoefs() {
    var brush
    for(var index = 0; index < brushes.length; index++) {
        brush = brushes[index]
        if(index == 0) {
            SetMoveCoefs(brush, GetRandInRange(-MOVE_RADIUS, MOVE_RADIUS),
                                GetRandInRange(1, MOVE_RADIUS))
        } else if(index == 1) {
            SetMoveCoefs(brush, GetRandInRange(-MOVE_RADIUS, -1),
                                GetRandInRange(-MOVE_RADIUS, MOVE_RADIUS))
        } else if(index == 2) {
            SetMoveCoefs(brush, GetRandInRange(-MOVE_RADIUS, MOVE_RADIUS),
                                GetRandInRange(-MOVE_RADIUS, -1))
        } else if(index == 3) {
            SetMoveCoefs(brush, GetRandInRange(1, MOVE_RADIUS),
                                GetRandInRange(-MOVE_RADIUS, MOVE_RADIUS))
        }
    }
}

function SetMoveCoefs(brush, inputXCoef, inputYCoef) {
    brush.xMoveCoef = inputXCoef
    brush.yMoveCoef = inputYCoef
}

function GetRandInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

AddColor(255, 0, 0)
AddColor(128, 255, 0)
AddColor(0, 255, 255)
AddColor(128, 0, 255)
AddSet(set)
set = []

AddColor(255, 135, 0)
AddColor(0, 255, 7)
AddColor(0, 120, 255)
AddColor(255, 0, 248)
AddSet(set)
set = []

AddColor(247, 255, 0)
AddColor(0, 255, 135)
AddColor(8, 0, 255)
AddColor(255, 0, 120)
AddSet(set)
set = []

AddBrushWithoutColor(GetRandInRange(0, width - BRUSH_RADIUS*2), -BRUSH_RADIUS*2)

AddBrushWithoutColor(width, GetRandInRange(0, height - BRUSH_RADIUS*2))

AddBrushWithoutColor(GetRandInRange(0, width - BRUSH_RADIUS*2), height)

AddBrushWithoutColor(-BRUSH_RADIUS*2,
                     GetRandInRange(0, height - BRUSH_RADIUS*2))

SetColors()

GenerateMoveCoefs()

mainGameCycle = setInterval(function() {
    Draw()
    Move()
    console.log('move')
}, time)
