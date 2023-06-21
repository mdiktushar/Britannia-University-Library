// js for navbar ...........................................................
// Get references to the button and the div
var button = document.getElementById("navButton");
var div = document.getElementById("navbarOption");

// Function to handle the visibility based on screen size
function handleVisibility() {
  // Check if the screen size is medium or larger
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Remove the "hidden" class
    div.classList.remove("hidden");
  } else {
    // Add the "hidden" class
    div.classList.add("hidden");
  }
}

// Initial call to handle visibility on page load
handleVisibility();

// Add resize event listener to handle visibility changes when the screen size changes
window.addEventListener("resize", handleVisibility);

// Add click event listener to the button
button.addEventListener("click", function () {
  // Toggle the "hidden" class on the div only if the screen size is smaller than medium
  if (!window.matchMedia("(min-width: 768px)").matches) {
    div.classList.toggle("hidden");
  }
});
// .....................................................

//   Js For Slide Show in banner............................
// Function to click the button
function clickButton() {
  var button = document.getElementById("buttonTwo");
  button.click();
}
// Auto-click the button every 5 seconds
setInterval(clickButton, 10000);
// ..........................................................

//   Js for tab-button for search section ..........................
// Get all tab buttons
const tabButtons = document.querySelectorAll(".tab-button");

// Get all tab panes
const tabPanes = document.querySelectorAll(".tab-pane");

// Add event listener to each tab button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all tab buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add 'active' class to the clicked tab button and corresponding pane
    const tabId = button.getAttribute("data-tab");
    const tabPane = document.getElementById(tabId);
    button.classList.add("active");
    tabPane.classList.add("active");
  });
});
// ............................................................
