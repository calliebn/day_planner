// Sets the date at the top
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Code to Generate the timeblocks
let timesArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

// Object that converts the 24hr time to 12hr time
let timeNew = {
    "09": "9AM",
    "10": "10AM",
    "11": "11AM",
    "12": "12PM",
    "13": "1PM",
    "14": "2PM",
    "15": "3PM",
    "16": "4PM",
    "17": "5PM"
}

for (let i = 0; i < timesArr.length; i++) {
    //Creating the new row 
    let newTimeBlockEl = $("<div>");
    newTimeBlockEl.addClass("row time-block");
    //Creating the hour column
    let hourEl = $("<div>")
    hourEl.addClass("col hour");
    hourEl.attr("id", timesArr[i]);
    let newPTag = $("<p>").text(timeNew[timesArr[i]])
    newPTag.appendTo(hourEl)
    hourEl.appendTo(newTimeBlockEl)

    //Creating the textarea
    let newTextAreaEL = $("<textarea>");
    newTextAreaEL.val(localStorage.getItem(timeNew[timesArr[i]]))
    //Adding CSS class to text area element
    newTextAreaEL.addClass("col-6 task")
    //Appending to the time-block div
    newTextAreaEL.appendTo(newTimeBlockEl);

    //Creating the Save Button
    let newBtnEl = $("<button>");
    //Adding CSS classes to button
    newBtnEl.addClass("col saveBtn");
    let newiTag = $("<i>")
    newiTag.addClass("far fa-save");
    newiTag.appendTo(newBtnEl);
    //Appending to the time-block div
    newBtnEl.appendTo(newTimeBlockEl);

    newTimeBlockEl.appendTo(".container");
}

var currentHr = parseInt(moment().format('HH'));

// loops over time blocks and changes the status based on the time
$(".time-block").each(function () {
    let blockHr = parseInt($(this).find(".hour").attr("id"));
    if (blockHr === currentHr) {
        $(this).addClass("present")
    } else if (blockHr < currentHr) {
        $(this).addClass("past")
    } else if (blockHr > currentHr) {
        $(this).addClass("future")
    }
})

// Saves the tasks to the planner
$(".saveBtn").on("click", function () {
    let hour = $(this).siblings(".hour").children().first().text()
    let taskarea = $(this).siblings("textarea").val()
    let task = localStorage.setItem(hour, taskarea)
    localStorage.getItem(task)

})

// Clears all events from the planner
$(".clear").on("click", function () {
    localStorage.clear()
    $(".time-block").find("textarea").val("");
}) 