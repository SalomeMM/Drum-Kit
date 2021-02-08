// Part 1of2: Detecting Button Press:
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this.innerHTML);

        var buttonInnerHTML = this.innerHTML; // if a button was pressed, then I check the inner HTML of that button

        makeSound(buttonInnerHTML); // and send it to makeSound in order to play the relevant sound

        buttonAnimation(buttonInnerHTML);
    });
}

// Part 2of2: Detecting Keyboard Press
document.addEventListener("keydown", function (event) { // if a key is pressed ins tead of a button, 

    makeSound(event.key); // I send the event.key, the key property of the event, which is the physical key pressed on the keyboard

    buttonAnimation(event.key);
});

function makeSound(key) { // parts 1 and 2 end up here, where we switch based on that key parameter.

    switch (key) { // now depending on each case we will tell it to do something different
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); // create a variable that stores this new object by writing "new Audio" and the URL or location of that audio. This will construct an audio HTML element with several properties and methods.
            tom1.play(); // play is one of those methods  
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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); // we successfully added the transparent class, but it doesn't come back, it stays transparent, see next function.

    setTimeout(function() {
        activeButton.classList.remove("pressed"); // first parameter is what is applied, in this case removing the assigned transparent class.
    }, 100); // second parameter is the amount of time we are going to wait to run this function, 0.1 seconds = 100 miliseconds).
}