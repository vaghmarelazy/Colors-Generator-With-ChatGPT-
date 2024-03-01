// Function to generate a random hex color code
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Function to calculate luminance and determine contrast color
  function getContrastColor(hexColor) {
    // Convert hex color to RGB
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white or black based on luminance
    return luminance > 0.5 ? "#000000" : "#ffffff";
  }

  // Get the container element
  var container = document.getElementById("container");

  // Get the text elements
  var heading = document.querySelector("h1");
  var text = document.querySelector("h2");

  // Get the social text elements
  var socialTexts = document.querySelectorAll(".social-text");

  // Get the instruction text
  var instructionText = document.getElementById("instruction");

  // Get the color change button
  var colorChangeButton = document.getElementById("colorChangeButton");

  // Display initial color and text color
  var hexCode = document.getElementById("hexCode");
  var currentColor = getRandomColor();
  container.style.backgroundColor = currentColor;
  hexCode.innerText = currentColor;
  // Set initial text color based on background color luminance
  heading.style.color = getContrastColor(currentColor);
  text.style.color = getContrastColor(currentColor);
  instructionText.style.color = getContrastColor(currentColor);
  // Set initial social text color based on background color luminance
  socialTexts.forEach(function (text) {
    text.style.color = getContrastColor(currentColor);
  });
  // Set initial button text color and border color based on background color luminance
  var buttonColor = getContrastColor(currentColor);
  colorChangeButton.style.color = buttonColor;
  colorChangeButton.style.borderColor = buttonColor;

  // Listen for spacebar key press event
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      // Hide the instruction text
      instructionText.style.display = "none";
      // Generate a random color
      currentColor = getRandomColor();
      // Apply the random color to the container background
      container.style.backgroundColor = currentColor;
      // Display the hex code of the random color
      hexCode.innerText = currentColor;
      // Set heading color based on background color luminance
      heading.style.color = getContrastColor(currentColor);
      // Set text color based on background color luminance
      text.style.color = getContrastColor(currentColor);
      // Set social text color based on background color luminance
      socialTexts.forEach(function (text) {
        text.style.color = getContrastColor(currentColor);
      });
      // Set button text color and border color based on background color luminance
      buttonColor = getContrastColor(currentColor);
      colorChangeButton.style.color = buttonColor;
      colorChangeButton.style.borderColor = buttonColor;
    }
  });

  // Listen for button click event on mobile devices
  colorChangeButton.addEventListener("click", function () {
    // Generate a random color
    currentColor = getRandomColor();
    // Apply the random color to the container background
    container.style.backgroundColor = currentColor;
    // Display the hex code of the random color
    hexCode.innerText = currentColor;
    // Set heading color based on background color luminance
    heading.style.color = getContrastColor(currentColor);
    // Set text color based on background color luminance
    text.style.color = getContrastColor(currentColor);
    // Set social text color based on background color luminance
    socialTexts.forEach(function (text) {
      text.style.color = getContrastColor(currentColor);
    });
    // Set button text color and border color based on background color luminance
    buttonColor = getContrastColor(currentColor);
    colorChangeButton.style.color = buttonColor;
    colorChangeButton.style.borderColor = buttonColor;
  });