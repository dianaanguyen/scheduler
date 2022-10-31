var currentDay = $("currentDay");
var currentHour = moment().format("HH");
console.log(currentHour); //check current hour

var date = moment().format("dddd, MMMM Do YYYY"); // format current date
currentDay.text(date); // displays current date
var currentTime = $("<p>");
currentTime.text(moment().format("h:mm a")); //store current time
currentTime.attr("class", "time");
currentDay.append(currentTime); //append to current day

function colorChange () { //will change color of the text area based on past, present, future
    
    for (var i = 9 ; i <= 17 ; i++) {

        var hourID = $("#" + i).attr("id")
        var textArea = $("#" + i)

        if (currentHour > hourID) {
            textArea.css("backgroundColor", "lightgrey"); //color for past

        } else if (currentHour === hourID) {
            textArea.css("backgroundColor", "lightblue"); //color for present time

        } else if (currentHour < hourID) {
            textArea.css("backgroundColor", "pink"); //color for future
        }
    }
}
colorChange(); //starts when page loads