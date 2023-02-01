'use strict';



var itemForm = document.getElementById('box'); // getting the parent container of all the checkbox inputs
var checkBoxes = itemForm.querySelectorAll('input[type="checkBox"]'); // get all the check box
document.getElementById('next').addEventListener('click', getData); //add a click event to the save button

let result = [];

function getData() { // this function will get called when the save button is clicked

    result = [];
    checkBoxes.forEach(item => { // loop all the checkbox item
        if (item.checked) { //if the check box is checked
            let data = { // create an object
                item: item.value,
                selected: item.checked
            }
            result.push(data); //stored the objects to result array
        }
    })
    drawPath()
}

function drawPath() {

    console.log(result);

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;

    const xStart = width / 2
    const yStart = height / 2

    context.strokeStyle = "blue";

    context.beginPath();
    context.lineTo(xStart, yStart);
    context.lineTo(100, 200);

    /*var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "DEV3020",
        password: "92186537",
        database: "DEV3020"
    });

    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    }); */



}