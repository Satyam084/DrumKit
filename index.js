
//when we click on any of the buttons displayed
var buttonsArr = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsArr.length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function () {


    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      default:
        alert("🙁 Click the right one");
    }
  });
}

//when a key is pressed to invoke a sound
document.addEventListener("keydown", function(event){
var keyPress = event.key;
buttonAnimation(event.key);
  switch (keyPress) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      alert("🙁 Press the right one");

  }
});

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
