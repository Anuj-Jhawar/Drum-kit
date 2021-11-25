
// var audio = new Audio("sounds/snare.mp3");

// function which will get call when any of the drums will get clicked and will apply sound accordingly
function handleClick()
{
    // using drumChar variable to know innerHTML of object to assign the audio
    var drumChar = this.innerHTML;
    // using switch case to assign the audio using drumChar
    soundplay(drumChar);
    //using addAnimation function to apply animation of pressed
    addAnimation(drumChar);
    
}

// using soundplay function to apply sound when we pressed any key or click on any instrument
function soundplay(key)
{
    switch(key)
    {
        case "w":
            var audio =  new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio =  new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio =  new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio =  new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio =  new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio =  new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio =  new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

    }
}


//adding sound for keypress

document.addEventListener("keypress",function(event){
    soundplay(event.key);
    addAnimation(event.key);
})


// adding animation to the button

function addAnimation(targetKey)
{
    var currentKey = document.querySelector('.' + targetKey);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    },100)
}

// number of drums in our website
var numberOfDrums = document.querySelectorAll(".drum").length;


// below line will give us the array which will contain all the drums
var drum =  document.querySelectorAll(".drum");


// adding function in the all the drums


// adding an eventListner to every drum
for(var i = 0;i<numberOfDrums;i++)
{
    drum[i].addEventListener("click",handleClick);
}