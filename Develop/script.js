//VARAIBLE DECLERATIONS
$(function () {
  //
  var pDate = $("#currentDay");
  var date = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  pDate.text(date);

  var currentHour = dayjs().format("H");

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
