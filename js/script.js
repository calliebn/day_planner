var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// On load, the page should check the current date and time
// The date in the header should reflect the current date
// IF the time is in the past, the past class should apply itself to the time-block
// IF the time is in the current hour, the present class should apply itself to the time-block
// IF the time is in the future, the future class should apply itself to the time-block

// When the user clicks in the text area for each time-block, they should be able to enter events
// When the user clicks the save icon, the event should be saved to their local storage
// When the page is refreshed, the events should not disappear