// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var paraDate = $("#currentDay");
  var date = dayjs().format("dddd MM/DD/YYYY");
  paraDate.text(date);

  // var timeBlockIndex = [9]
  var currentHour = dayjs().format("H");

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  for (let i = 9; i < 18; i++) {
    var timeBlock = $("#hour-" + i);
    if (i < currentHour) {
      timeBlock.addClass("past");
    } else if (i == currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  }
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function (event) {
    console.log("clicked");
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

//hint from ben : put a block in statically for every hour its already in the html just copy and paste it down
