var canvas = document.getElementById('canvasId')
var ctx = canvas.getContext('2d')
var height = canvas.clientHeight, width = canvas.clientWidth

const TRANSPARENCY = 0.5
const BRUSH_RADIUS = 25
const GRAY_COEF = 71

var brushes = []
var set = []
var sets = []

function AddColor(inputRed, inputGreen, inputBlue){
    set.push({ red: inputRed, green: inputGreen, blue: inputBlue })
}

function AddSet(inputSet) { sets.push(inputSet) }

function AddBrushWithoutColor(inputX, inputY, inputMoveCoef) {
    brushes.push({ x: inputX, y: inputY, moveCoef: inputMoveCoef,
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
                                                   + inputBrush.blue  + ") "
    circle.arc(inputBrush.x + BRUSH_RADIUS, inputBrush.y + BRUSH_RADIUS,
                                            BRUSH_RADIUS, 0, 2 * Math.PI)
    ctx.fill(circle)
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

AddBrushWithoutColor(GetRandInRange(0, width - BRUSH_RADIUS*2), 0, 0 )

AddBrushWithoutColor(width - BRUSH_RADIUS*2,
                     GetRandInRange(0, height - BRUSH_RADIUS*2), 0 )

AddBrushWithoutColor(GetRandInRange(0, width - BRUSH_RADIUS*2),
                     height - BRUSH_RADIUS*2, 0 )

AddBrushWithoutColor(0, GetRandInRange(0, height - BRUSH_RADIUS*2), 0 )

Draw()
