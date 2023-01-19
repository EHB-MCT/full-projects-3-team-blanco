var destinationCheckboxes = document.querySelectorAll("input[name=destination]");

destinationCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            var destination = checkbox.value;
            // code to handle the selected destination, such as displaying more information or adding to an array of selected destinations
        } else {
            // code to handle if the destination is deselected
        }
    });
});