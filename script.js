red.addEventListener("click", changeToRed);
green.addEventListener("click", changeToGreen);
blue.addEventListener("click", changeToBlue);
yellow.addEventListener("click", changeToYellow);

function changeToRed() {
  document.getElementById("colorbox").style.backgroundColor = "red";
}

function changeToGreen() {
  document.getElementById("colorbox").style.backgroundColor = "green";
}

function changeToBlue() {
  document.getElementById("colorbox").style.backgroundColor = "blue";
}

function changeToYellow() {
  document.getElementById("colorbox").style.backgroundColor = "yellow";
}