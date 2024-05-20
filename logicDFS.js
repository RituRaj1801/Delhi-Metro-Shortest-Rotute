const entirMetroMap1 = [
  pinkLine,
  redLine,
  blueLine1,
  blueLine2,
  yellowLine,
  greenLine,
  voiletLine,
  magentaLine,
  airportExpressLines,
];

const entirMetroStation = entirMetroMap1.flat(100);

// Function to filter and update dropdown content
function updateDropdown(inputBox, dropdownContent) {
  const inputValue = inputBox.value.toLowerCase();
  // Clear previous content
  dropdownContent.innerHTML = "";

  // Keep track of unique stations
  const uniqueStations = new Set();

  // Filter and populate the dropdown with matching elements
  entirMetroStation.forEach(function (item) {
    const lowerCaseItem = item.toLowerCase();
    if (
      lowerCaseItem.startsWith(inputValue) &&
      !uniqueStations.has(lowerCaseItem)
    ) {
      uniqueStations.add(lowerCaseItem);

      var option = document.createElement("div");
      // Highlight the matching part of the station name
      const highlightedText = item.substring(0, inputValue.length);
      const remainingText = item.substring(inputValue.length);
      option.innerHTML = `<strong>${highlightedText}</strong>${remainingText}`;
      option.addEventListener("click", function () {
        // Set the selected value in the input box
        inputBox.value = item;
        // Optionally, you can close the dropdown after selecting
        dropdownContent.style.display = "none";
      });
      dropdownContent.appendChild(option);
    }
  });

  // Show the dropdown
  dropdownContent.style.display = "block";
}

// Setup for Input Box 1
const dropdownButton1 = document.getElementById("dropdownButton1");
const inputBox1 = document.getElementById("inputBox1");
const dropdownContent1 = document.getElementById("dropdownContent1");

// Event listeners for Input Box 1
inputBox1.addEventListener("input", function () {
  updateDropdown(inputBox1, dropdownContent1);
});

dropdownButton1.addEventListener("click", function () {
  dropdownContent1.style.display =
    dropdownContent1.style.display === "block" ? "none" : "block";
  if (dropdownContent1.style.display === "block") {
    updateDropdown(inputBox1, dropdownContent1);
  }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches("#dropdownButton1")) {
    dropdownContent1.style.display = "none";
  }
});

// Setup for Input Box 2
const dropdownButton2 = document.getElementById("dropdownButton2");
const inputBox2 = document.getElementById("inputBox2");
const dropdownContent2 = document.getElementById("dropdownContent2");

// Event listeners for Input Box 2
inputBox2.addEventListener("input", function () {
  updateDropdown(inputBox2, dropdownContent2);
});

dropdownButton2.addEventListener("click", function () {
  dropdownContent2.style.display =
    dropdownContent2.style.display === "block" ? "none" : "block";
  if (dropdownContent2.style.display === "block") {
    updateDropdown(inputBox2, dropdownContent2);
  }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches("#dropdownButton2")) {
    dropdownContent2.style.display = "none";
  }
});
















