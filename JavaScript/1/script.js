//Here click is an event type 2nd paramerter is listner

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
// The above is a event listner which on click (Enent type) on first button calls handleClick Function if we add () at the end of that it will acctually call it immediately while adding event listner that we dont want we want to recognize the click :. dont do it
//it is idea of passing a funtion as parameter so it can be called later on in js

// can also be done as
/*
document.querySelector("button").addEventListener("click",function () {    alert("I Got Clicked");    } );
*/

function handleClick() {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();

    // this.style.color = "white";
    // console.log(this); use to access curr element occupied by event listner

    var btnInnerHtml = this.innerHTML;
    makeSound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
}


document.addEventListener("keypress", function (event) { console.log(event); makeSound(event.key); btnAnimation(event.key); })


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(btnInnerHtml);
            break;
    }
}


function btnAnimation(currKey) {
    var ActiveBtn = document.querySelector("." + currKey);

    ActiveBtn.classList.add("pressed");

    setTimeout(function () { ActiveBtn.classList.remove("pressed"); }, 100)
}