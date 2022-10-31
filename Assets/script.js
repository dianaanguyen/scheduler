var saveBtn = $(".saveBtn"); //targets the save button

function showCalendar() {
    var allInputs = JSON.parse(localStorage.getItem("items"));
    if (allInputs !== null) {
        for (i = 0; i < allInputs.length; i++) {
            $('#' + allInputs[i].hour).val(allInputs[i].input);
        }
    }
}

function saveToLocalStorage(e) { // saves to local storage
    e.preventDefault();
    var array = [];
    for (i = 10; i <= 18; i++) { //9-17 meaning time block from 9am-5pm
        var value = $('#' + i).val(); 
        if (value) {
            var storeObject = {
                hour: i,
                input: value
            }
            array.push(storeObject); 
            localStorage.setItem("items", JSON.stringify(array));
        }
    } 
}

showCalendar();
saveBtn.on ("click", saveToLocalStorage); //saves to local storage when save button is clicked