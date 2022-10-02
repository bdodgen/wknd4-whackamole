// Milestone 1: HTML and CSS
// Create index.html add base HTML structure.
// Add the headings and the button.
// Create a div with class game.
// Inside the div with class game create six divs with class hole.
// Inside each div with class hole create two divs, one with class hole- img and the other one with class mole.
// Add the element that will keep the score.
// Create style.css and link it to the HTML.The following styles are important for the game functionality, but you can add some more to make it look better.

// Milestone 2: Javascript
// Create index.js file and link it to the HTML.
// Use document.querySelector to select the start button and score.Use document.querySelectorAll to select holes and moles.Store them into variables.
// Create a variable score and set it to 0. Create another variable timeUp and set it to false.
// Create randomTime function that will take two parameters min and max, and it will return random time.
// Create randomHole function that will take one parameter holes, and it will return a random hole.
// Create peep function that will:
// Get a random time from the randomTime to determine how long mole should peep
// Get the random hole from the randomHole function
//   Add the CSS class so selected mole can "pop up"
// Make the selected mole "pop down" after a random time(Hint: You can use setTimeout function)
// Create whack function that will increase the score and display it on the page.
// Create hide function that will remove active class from holes.
// Add a click event listener on each mole that will call whack and hide functions.
// Add click event listener to the button which reset score and time, start the game, and set the timer.