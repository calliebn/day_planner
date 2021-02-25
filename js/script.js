var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// On load, the page should check the current date and time
// The date in the header should reflect the current date
// IF the time is in the past, the past class should apply itself to the time-block
// IF the time is in the current hour, the present class should apply itself to the time-block
// IF the time is in the future, the future class should apply itself to the time-block

// When the user clicks in the text area for each time-block, they should be able to enter events
// When the user clicks the save icon, the event should be saved to their local storage
// When the page is refreshed, the events should not disappear unless it is a new day?

// Code to Generate the timeblocks
let timesArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (let i=1; i<timesArr.length; i++) {
    //Creating the new row 
    let newTimeBlockEl = $("<div>");
    newTimeBlockEl.addClass("row time-block");
    //Creating the hour column
    let hourEl = $("<div>")
    hourEl.addClass("col hour");
    hourEl.attr("id", timesArr[i]);
    let newPTag = $("<p>").text(timesArr[i])
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
    //Adding CSS class to button
    newBtnEl.addClass("col saveBtn");
    let newiTag = $("<i>")
    newiTag.addClass("far fa-save");
    newiTag.appendTo(newBtnEl);
    //Appending to the time-block div
    newBtnEl.appendTo(newTimeBlockEl);

    newTimeBlockEl.appendTo(".container");
}

var currentHr = moment().format('hA')
console.log(currentHr)

// loop over time blocks
$(".time-block").each(function() {
    let blockHr = $(this).find(".hour").attr("id");
    console.log(blockHr)
    if (blockHr === currentHr) {
        $(this).addClass("present")
    } else if (blockHr < currentHr) {
        $(this).addClass("past")
    } else if (blockHr > currentHr) {
        $(this).addClass("future")
    }
    // let task = localStorage.getItem(9am)
    // textArea.value = task
})

$(".saveBtn").on("click", function() {
    console.log("click save btn")
    let task = $(this).siblings(".task").val()
    console.log(task)

    //grab the block hour
    //set local storage item (hour, task)
}
)