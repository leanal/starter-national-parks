// view the entire HTML document
console.log(document);

// find an <h1> element
const heading = document.querySelector("h1");
console.log(heading);

// find an element with the class "value"
const elem01 = document.querySelector(".value");
console.log(elem01);

// find a <button>
const elem02 = document.querySelector("button");
console.log(elem02);

// find an element with class "area"
const elem03 = document.querySelector(".area-display");
console.log(elem03);

// find an <div> that  is a descendant of class "stat"
const elem04 = document.querySelector(".stat div");
console.log(elem04);

// find an element with class "hello"
const elem05 = document.querySelector(".hello");
console.log(elem05); // null because it does not exist

// find all buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);

// iterate over the NodeList of buttons
for (let element of buttons.values()) {
  console.log(element);
}

// find all h3
const heading3List = document.querySelectorAll("h3");

// iterate over entire list
for (let element of heading3List.values()) {
  console.log(element);
}

// another way to iterate
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

// find all divs containing areas
const areas = document.querySelectorAll(".area-display .value");

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}

// UPDATING DOM

// select all the descriptions on the page

const descriptions = document.querySelectorAll(".description-display");
console.log(descriptions)

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  console.log(content);
  // desc.innerText = content; <-- this will show link as text
  desc.innerHTML = content;
}

// select all rating values

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  console.log(ratingValue);
  
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
    //rating.style.fontWeight = "bold";
    //rating.style.color = "#3ba17c";
  }
}

// create new Element with text 
// Select all parks
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;

// create a new element
const newElement = document.createElement("div");

// add the text
newElement.innerText = `${numberParks} exciting parks to visit`;

//add the class
newElement.classList.add("header-statement");

// insert the new element
const header = document.querySelector("header");
header.appendChild(newElement);

// Removing DOM elements
// get the parent element of all parks
const main = document.querySelector("main");

//select a single park
const park = main.querySelector(".park-display");

// remove that park
// main.removeChild(park);


/* EVENT LISTENER */

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    console.log(park);
    park.style.backgroundColor = "#c8e6c9";
  });
});


// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Add an event listener
/*
nameSorter.addEventListener("click", (event) => {
  event.preventDefault(); 
*/

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault(); // gets rid of the default behavior of the link, which is reloading the page
  console.log("You clicked the name sorter");

  // 1.  Get the main element
  const main = document.querySelector("main");
  console.log(main);

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  console.log(parksList);

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array from NodeList
  const parksArray = Array.from(parksList);
  console.log(parksArray);

  // 5. Sort the array
  parksArray.sort(sortByName);
  /*
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });
  */

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};


// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
console.log(nameSorter);

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);