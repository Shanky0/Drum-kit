var numberOfDrumButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "s":
      var tom1 = new Audio("sound/s.wav");
      tom1.play();
      break;

    case "h":
      var tom2 = new Audio("sound/h.wav");
      tom2.play();
      break;

    case "a":
      var tom3 = new Audio("sound/a.wav");
      tom3.play();
      break;

    case "g":
      var tom4 = new Audio("sound/g.wav");
      tom4.play();
      break;

    case "u":
      var snare = new Audio("sound/u.wav");
      snare.play();
      break;

    case "r":
      var crash = new Audio("sound/r.wav");
      crash.play();
      break;

    case "i":
      var kick = new Audio("sound/i.wav");
      kick.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}