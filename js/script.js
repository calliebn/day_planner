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
    //event.preventDefault()
    let id = JSON.stringify[timeNew]
    let hour = $(this).siblings(id).val()
    let taskarea = $(this).siblings("textarea").val()
    let task = localStorage.setItem(hour, taskarea)
    //let appointment = JSON.stringify(task)
    //let task = localstorage.setItem("taskarea")
    localStorage.getItem(task)
    console.log(task)
    //let task = $(this).siblings(".task").val()

    //grab the block hour
    //set local storage item (hour, task)
})
// Clears all events from the planner
$(".clear").on("click", function () {
    localStorage.clear()
    $(".time-block").find("textarea").val("");
}) 

// On load, the page should check the current date and time
// The date in the header should reflect the current date
// IF the time is in the past, the past class should apply itself to the time-block
// IF the time is in the current hour, the present class should apply itself to the time-block
// IF the time is in the future, the future class should apply itself to the time-block

// When the user clicks in the text area for each time-block, they should be able to enter events
// When the user clicks the save icon, the event should be saved to their local storage
// When the page is refreshed, the events should not disappear unless it is a new day?