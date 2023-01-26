'use strict';

var itemForm = document.getElementById('box'); // getting the parent container of all the checkbox inputs
var checkBoxes = itemForm.querySelectorAll("#checkBox"); // get all the check box
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
    drawPath();
}

function drawPath() {
    console.log(result);



}