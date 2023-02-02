"use strict";


import {
    result
} from "./personal.js";


document.getElementById('1_boven').addEventListener('click', OneLiftToThree);

function OneLiftToThree() {
    document.getElementById("img").src = "../images/museum_routes/living_3.png";

    const terms = document.createElement('area');
    terms.setAttribute('id', '3_boven');
    terms.setAttribute('target', '_blank');
    terms.setAttribute('coords', '314,210,23');
    terms.setAttribute('shape', 'circle');

    document.getElementById('3_boven').addEventListener('click', ThreeLiftToFour);
};

function ThreeLiftToFour() {
    document.getElementById("img").src = "../images/museum_routes/living_evolution_4_elevator.png";

    const terms = document.createElement('area');
    terms.setAttribute('id', '4_boven');
    terms.setAttribute('target', '_blank');
    terms.setAttribute('coords', '314,211,22');
    terms.setAttribute('shape', 'circle');
};