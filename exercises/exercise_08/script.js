 /*Adding a class when the toggle box is clicked*/
 let menutoggle = document.querySelector('.toggle');
 menutoggle.onclick = function(){
     menutoggle.classList.toggle('active')
 }

// Select each button
var blackBtn = document.querySelector('#blackButton');
var whiteBtn = document.querySelector('#whiteButton');


// Add an event listener
blackBtn.onclick = switchBlack;
whiteBtn.onclick = switchWhite;


// Write the event handler
function switchBlack() {
var body = document.querySelector('body');
body.style.backgroundColor = '#000000'; 
body.style.color = 'white'; 
}

function switchWhite() {
var body = document.querySelector('body');
body.style.backgroundColor = '#faf9f7'; 
body.style.color = 'black'; 
}