
$(function () {
  var paraDate = $("#currentDay");
  var date = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  paraDate.text(date);

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


  var SaveItem = $(".saveBtn");
  var thingsToDo = JSON.parse(localStorage.getItem("events")) || {};

  SaveItem.on("click", storeEvents);

  for (const key in thingsToDo) {
    var timeBlockB = $("#" + key).children()[1];
    timeBlockB.value = thingsToDo[key];
    console.log(timeBlockB);
  }

  function storeEvents(event) {
    var eventStore = {
      event: $(this).siblings()[1].value,
      time: $(this).parent().attr("id"),
    };
    thingsToDo[eventStore.time] = eventStore.event;
    localStorage.setItem("events", JSON.stringify(thingsToDo));
  }
});
