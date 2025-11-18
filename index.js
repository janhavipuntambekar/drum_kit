let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //play audio
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    //show animation
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keypress", function (event) {
  //play audio
  makeSound(event.key);
  //show animation
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      //play audio for w
      let crash = new Audio("./audio/crash.mp3");
      crash.play();
      break;
    case "a":
      //play audio for a
      let kick = new Audio("./audio/kick.mp3");
      kick.play();
      break;
    case "s":
      //play audio for s
      let snare = new Audio("./audio/snare.mp3");
      snare.play();
      break;
    case "d":
      //play audio for d
      let tom1 = new Audio("./audio/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      //play audio for j
      let tom2 = new Audio("./audio/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      //play audio for k
      let tom3 = new Audio("./audio/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      //play audio for l
      let tom4 = new Audio("./audio/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("key pressed", key);
  }
}
function buttonAnimation(key) {
let activeButton = document.querySelector("." + key);
activeButton.classList.add("pressed");

setTimeout(function() {
activeButton.classList.remove("pressed");
},100)

}
