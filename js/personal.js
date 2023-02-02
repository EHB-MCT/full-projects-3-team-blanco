'use strict';

// de array "result" zouden we exporteren naar personalmap.js om de meest accurate route te krijgen

var itemForm = document.getElementById('box');
var checkBoxes = itemForm.querySelectorAll('input[type="checkBox"]');
document.getElementById('next').addEventListener('click', getData);

let result = [];

function getData() {

    result = [];
    checkBoxes.forEach(item => {
        if (item.checked) {
            let data = {
                item: item.value,
                selected: item.checked
            }
            result.push(data);
        }
    })
    drawPath()
}