var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

console.log(dayjs());

// Date at top of page //
var now = dayjs();
var theDate = document.createElement("p");
theDate.innerHTML = now;
console.log(now);

var headerEl = document.getElementById("currentDay");
headerEl.appendChild(theDate);

// Container Element
var containerEl = document.getElementById("container");

// Timeblock Element //
var timeblockEl = document.getElementById("timeblocks");

  // classname = time-block
  var containerEl = document.getElementById("container");



// Loop Through 'Working Hours'
hours.forEach(hour => {
    // Create a new element for each hour
    const element = document.createElement('div');    
    // Set the content or attributes of the element
    element.textContent = hour;
    // Modify the element attributes
    element.setAttribute("class", "hour")
    // Append the element to the desired parent element
    document.body.appendChild(element);
  });















