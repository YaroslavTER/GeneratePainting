var canvas = document.getElementById('canvasId')
var ctx = canvas.getContext('2d')
var height = canvas.clientHeight, width = canvas.clientWidth
//var brush = { x: 0, y: 0, red: 0, green: 0, blue: 0 }
const TRANSPARENCY = 0.5
const BRUSH_RADIUS = 10

var brushes = []
var colors = [{255, 0, 0}, {128, 255, 0}, {0, 255, 255}, {128, 0, 255},
              {255, 135, 0}, {0, 255, 7}, {0, 120, 255}, {255, 0, 248},
              {247, 255, 0}, {0, 255, 135}, {8, 0, 255}, {255, 0, 120}]

function AddBrush(inputBrush){ brushes.push(inputBrush) }

function GenerateBrushes(){
    for(var color of colors){

    }
}

function GetRandInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function IsColision(){

}
