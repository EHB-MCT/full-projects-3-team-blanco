"use strict"



let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

const xStart = width / 2
const yStart = height / 2

context.lineWidth = 2;
context.strokeStyle = "blue";


/************* START/TO FUNCTIES *************/
function drawStartToDino() {
    context.beginPath();

    context.moveTo(xStart, yStart);
    context.lineTo(100, 200);

    context.stroke();
}

function drawStartToBiodiv() {
    context.beginPath();

    context.moveTo(xStart, yStart);
    context.lineTo(100, 200);

    context.stroke();
}

function drawStartToHuman() {

}

function drawStartToMinerals() {

}

function drawStartToNaturalSciences() {

}

function drawStartToEvolution() {

}

function drawStartToLiving() {

}

function drawStartToLuminopolis() {

}





/************* FROM/TO FUNCTIES *************/
function drawDinoToIgua() {

}

function drawIguaToMosa() {

}

function drawLevendToEvolutie() {

}

function drawIguaToMosa() {

}

function drawIguaToMosa() {

}

export default function drawLevendToEvolutie();