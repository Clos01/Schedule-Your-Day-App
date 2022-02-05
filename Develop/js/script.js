// get current day using SVGAnimateMotionElement.js
let currentDay = moment().format("dddd, MMM Do gggg");
// console.log(currentDay)

// Set each timeblock in the daily schedule using moment.js
let hour9 = moment().hour(9);
let hour10 = moment().hour(10);
let hour11 = moment().hour(11);
let hour12 = moment().hour(12);
let hour13 = moment().hour(13);
let hour14 = moment().hour(14);
let hour15 = moment().hour(15);
let hour16 = moment().hour(16);
let hour17 = moment().hour(17);
let hour18 = moment().hour(18);
// Creatting an array of hour blocks for code generation
let hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// Get local storage data or set to empty
let events9 = JSON.parse(localStorage.getItem('hour9')) || "";
let events10 = JSON.parse(localStorage.getItem('hour10')) || "";
let events11 = JSON.parse(localStorage.getItem('hour11')) || "";
let events12 = JSON.parse(localStorage.getItem('hour12')) || "";
let events13 = JSON.parse(localStorage.getItem('hour13')) || "";
let events14 = JSON.parse(localStorage.getItem('hour14')) || "";
let events15 = JSON.parse(localStorage.getItem('hour15')) || "";
let events16 = JSON.parse(localStorage.getItem('hour16')) || "";
let events17 = JSON.parse(localStorage.getItem('hour17')) || "";

// Generate all timeblocks and insert saved local storage data
$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

/// Display current day at top of planner
$("#currentDay").text(currentDay)

///Audit each time block  to display, current and future timeblocks 
let auditTime = function (){
    currentTime = moment().format("hh:mm:ss");
    //Audit hour 9 
    if (moment().isBetween(hour9, hour10)){
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour10)){
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }
    //Audit hour 10
    if (moment().isBetween(hour10, hour11)){
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour10)){
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }
    // Audit hour 11 
    if (moment().isBetween(hour11, hour12)){
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(hour11)){
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }
    //Audit hour 12
    if (moment().isBetween(hour12, hour13)){
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(hour12)){
        $("#timeblock12").addClass(past);
    }
    else {
        $("timeblock12").addClass("future");
    }
    //Audit hour 13
    if (moment().isBetween(hour13, hour14)){
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(hour13)){
        $("timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }
    //Audit hour 14
    if (moment().isBetween(hour14, hour15)){
        $("timeblock14").addClass("present");
    }
    else if (moment().isAfter(hour14)){
        $("#timeblock14").addClass("past");
    }
    else{
        $("#timeblock14").addClass("future");
    }
    //audit hour 15
    if (moment().isBetween(hour15, hour16)){
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(hour15)){
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }
    //Audit hour 16
    if (moment().isBetween(hour16, hour17)){
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour15)){
        $("#timeblock16").addClass("past");
    }
    else{
        $("timeblock16").addClass("future");
    }
    if (moment().isBetween(hour16, hour17)){
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour16)){
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }
     // Audit hour 17 
     if (moment().isBetween(hour17, hour18)) {
        $("#timeblock17").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock17").addClass("past");
    }
    else {
        $("#timeblock17").addClass("future");
    };
};
