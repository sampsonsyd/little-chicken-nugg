// Select each button
var grayBtn = document.querySelector('#grayButton');
var whiteBtn = document.querySelector('#whiteButton');
var blueBtn = document.querySelector('#blueButton');
var yellowBtn = document.querySelector('#yellowButton');

// Add an event listener
grayBtn.onclick = switchGray;
whiteBtn.onclick = switchWhite;
blueBtn.onclick = switchBlue;
yellowBtn.onclick = switchYellow;

// Write the event handler
function switchGray() {
  var body = document.querySelector('body');
  body.style.backgroundColor = '#815E5B'; 
  body.style.color = 'white'; 
}

function switchWhite() {
  var body = document.querySelector('body');
  body.style.backgroundColor = '#7A6F9B'; 
  body.style.color = 'white'; 
}

function switchBlue() {
  var body = document.querySelector('body');
  body.style.backgroundColor = '#8B85C1'; 
  body.style.color = 'white'; 
}

function switchYellow() {
  var body = document.querySelector('body');
  body.style.backgroundColor = '#D4CDF4'; 
  body.style.color = 'white'; 
}
