/*Applying Event Listener for Button Clicks to all buttons*/
var x = document.querySelectorAll(".drum");

for(var i=0;i < x.length; i++){
x[i].addEventListener("click", handleClick);
}

/*Listening for Button Clicks*/
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  drumSounds(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

/*Listening for Key Presses*/
document.addEventListener("keydown", function() {
  drumSounds(event.key);
  buttonAnimation(event.key);
});

/*Playing Drum Sounds*/
function drumSounds(keyOrButton) {

  switch (keyOrButton) {
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "a":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "d":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "j":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
  }
}

function buttonAnimation(currentKeyOrButton){
  var activeKeyOrButton = document.querySelector("." + currentKeyOrButton);
  function pressKeyOrButton() {
    activeKeyOrButton.classList.toggle("pressed");
  }
  pressKeyOrButton();
  setTimeout(pressKeyOrButton, 100);
}
