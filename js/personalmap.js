"use strict";


/*import {
    result
} from "./personal.js";*/


document.getElementById('1_boven').addEventListener('click', OneLiftToThree);


function OneLiftToThree() {
    document.getElementById("img").src = "../images/museum_routes/living_3.png";

    document.getElementById('1_boven').id = '3_boven';
    document.getElementById('3_boven').coords = '314,210,23';

    document.getElementById('3_boven').addEventListener('click', ThreeLiftToFour);
};

function ThreeLiftToFour() {
    document.getElementById("img").src = "../images/museum_routes/living_evolution_4_elevator.png";
};