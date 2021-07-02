// variables

var timeEL = $("#currentDay");
var time = moment();

// local storage variables

var t9am = $("#9am");
var t10am = $("#10am");
var t11am = $("#11am");
var t12pm = $("#12pm");
var t1pm = $("#1pm");
var t2pm = $("#2pm");
var t3pm = $("#3pm");
var t4pm = $("#4pm");
var t5pm = $("#5pm");

// time on header updates every second do this first you know how
timeEL.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

setInterval(function () {
  timeEL.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000);

// local storage for timeblocks
// set storage

$("button").on("click", function () {
  localStorage.setItem("9am", t9am.val());
  localStorage.setItem("10am", t10am.val());
  localStorage.setItem("11am", t11am.val());
  localStorage.setItem("12pm", t12pm.val());
  localStorage.setItem("1pm", t1pm.val());
  localStorage.setItem("2pm", t2pm.val());
  localStorage.setItem("3pm", t3pm.val());
  localStorage.setItem("4pm", t4pm.val());
  localStorage.setItem("5pm", t5pm.val());
});
// get storage
$("#9am").append(localStorage.getItem("9am"));
$("#10am").append(localStorage.getItem("10am"));
$("#11am").append(localStorage.getItem("11am"));
$("#12pm").append(localStorage.getItem("12pm"));
$("#1pm").append(localStorage.getItem("1pm"));
$("#2pm").append(localStorage.getItem("2pm"));
$("#3pm").append(localStorage.getItem("3pm"));
$("#4pm").append(localStorage.getItem("4pm"));
$("#5pm").append(localStorage.getItem("5pm"));

// function determines which time block should be highlighted either "past", "present" "future"
function timeHighlight() {
  hour = time.hours();
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("#id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

timeHighlight();
