// get current day using SVGAnimateMotionElement.js
let currentDay = moment().format("dddd, MMM Do");
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
let hours = [hour9, hour10. hour11, hour12, hour13, hour14, hour15, hour16, hour16, hour17, hour18,];

// Getting Local data Storage or setting to empty 
let events9  = JSON.parse(localStorage.getItem('hour9')) || "";
let events10 = JSON.parse(localStorage.getItem('hour10')) || "";
let events11 = JSON.parse(localStorage.getItem('hour11')) || "";
let events12 = JSON.parse(localStorage.getItem('hour12')) || "";
let events13 = JSON.parse(localStorage.getItem('hour13')) || "";
let events14 = JSON.parse(localStorage.getItem('hour14')) || "";
let events15 = JSON.parse(localStorage.getItem('hour15')) || "";
let events16 = JSON.parse(localStorage.getItem('hour16')) || "";
let events17 = JSON.parse(localStorage.getItem('hour17')) || "";
