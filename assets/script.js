// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// ---Global Variables---//
let hour = dayjs().format("h")


function setClocK(){
  let displayTime = dayjs().format("dddd, MMMM D YYYY")
  let displayTime2 = dayjs().format("h:mm a")
  $("#currentDay").text(displayTime);
  $("#currentDay2").text(displayTime2);
  
}

createHour = function(){
  hour = dayjs().format("h")
}

function createTimeRows(hour) {
console.log(hour);
}

createTimeRows()

//   // loop through hours and create time blocks
//   const isPast = hour < currentHour;
//   const isPresent = hour === currentHour;
//   const isFuture = hour > currentHour;
//   timeBlock.forEach(hour => {
//     i++;
//     if (isPast) {rowClass = rowClass + 'past'};
//     if (isPresent) {rowClass = rowClass + 'present'};
//     if (isFuture) {rowClass = rowClass + 'future'};
//   });


// // creating a parent <div> that will contain all the TimeRows
//   const row = $("<div>");
//   $("#container").append(row)
 
//   // store the current hour. we will use this to colour rows
//   const currentHour = Number(dayjs().format("H"));
//   console.log(currentHour);

//   // create booleans 
  

//   // create a row that we can color
//   let rowClass = 'row time-block m-1'
//   row.attr('class', rowClass)

//   const timeCol = $("<div>")
//   timeCol.attr('class', "time-col col-2");

//   timeCol.text(hour + ":00")
//   console.log(hour);
//   $(".row").append(timeCol)

// }


// $(function () {
//   setClocK();
//   createTimeRows();
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?


//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?


//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?

  

//   // TODO: Add code to display the current date in the header of the page.
  
// });
