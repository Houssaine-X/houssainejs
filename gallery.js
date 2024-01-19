/*Name this external file gallery.js*/

function upDate(previewPic) {
  stopLoop();
  /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

  console.log("changed");
  document.getElementById("image").style.backgroundImage =
    "url(" + previewPic.src + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  startLoop();
  /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
  console.log("undo");
}
function focusImage() {
  // Add code to handle the focus event for the image container
  // For example, you can change the border color to indicate focus
  document.getElementById("image").style.border = "50px solid red";
  console.log("focus");
}

function blurImage() {
  // Add code to handle the blur event for the image container
  // For example, you can change the border color back to its original color
  document.getElementById("image").style.border = "20px solid black";
  console.log("blur");
}
window.onload = function onload() {
  alert("Hey");
  console.log("onload");
};

// Array of image sources
const imageSources = ["image1.png", "image2.png", "image3.png"];

let currentIndex = 0;

function changeImage() {
  const imageDiv = document.getElementById("image");
  // Set the background image of the div to the current image source
  imageDiv.style.backgroundImage = `url(${imageSources[currentIndex]})`;
  // Increment the index for the next image
  currentIndex = (currentIndex + 1) % imageSources.length;
}
window.onload = function () {
  setInterval(changeImage, 1000);
  console.log("loop");
};
function startLoop() {
  intervalId = setInterval(changeImage, 1000);
  console.log("loop started");
}

function stopLoop() {
  clearInterval(intervalId);
  console.log("loop stopped");
}

window.onload = function () {
  startLoop(); // Start the loop initially
  console.log("onload");
};
