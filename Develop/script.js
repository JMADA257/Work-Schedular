//VARAIBLE DECLERATIONS
$(function () {
  //setting up a variable that links to the paragraph section with the class of current day 
  var pDate = $("#currentDay");
  //setting up a date variable that is the day month year and time 
  var date = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  //replacing pdate with the text of date which is the day and time 
  pDate.text(date);
//this will set a  variable under currenHour that displays the current hour 
  var currentHour = dayjs().format("H");

  //setting up a for loop 
  for (let i = 9; i < 18; i++) {
    //setting up a variable of timeblock which equals to the body divs hour class plus i with i being 9
    var timeBlock = $("#hour-" + i);
    // setting up a variable that if i is less then the current hour 
    if (i < currentHour) {
    //making it so if the current hour is greater then the index of the timeblock then it will have the past id 
      timeBlock.addClass("past");
      //otheriwse if its equal to the currenthour then it will get the present class
    } else if (i == currentHour) {
      timeBlock.addClass("present");
      //everything else gets the future 
    } else {
      timeBlock.addClass("future");
    }
  }

  // variable for the button element for each div
  var SaveItem = $(".saveBtn");
  //taking the items stored in local storage and parsing them basically turning them back into a js string
  var thingsToDo = JSON.parse(localStorage.getItem("events")) || {};

  //Making an event listener with a click property so when someone clicks the save button this will happen
  SaveItem.on("click", storeEvents);
  //
  for (const key in thingsToDo) {
    //
    var timeBlockB = $("#" + key).children()[1];
    //
    timeBlockB.value = thingsToDo[key];
    //
    console.log(timeBlockB);
  }
  //creating a function to store events
  function storeEvents(event) {
    //making an object array consisting of two different values
    var eventStore = {
      //This will select the siblings with and specifically the sibling with an index of 1 and withdraw the value from it
      event: $(this).siblings()[1].value,
      //This will select the parent of the "this" which is the div. This referering to the button and grabbing the hour of the day and saving it basically as the key
      time: $(this).parent().attr("id"),
    };

    //
    thingsToDo[eventStore.time] = eventStore.event;
    //
    localStorage.setItem("events", JSON.stringify(thingsToDo));
  }
});
