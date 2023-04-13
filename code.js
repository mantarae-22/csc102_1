function playSound(soundSrc){
    var sound = document.createElement("audio");
    sound.src = soundSrc;
    sound.setAttribute("controls", "auto");
    document.body.appendChild(sound);
    play = function(){
        sound.play();
    }
    stop = function(){
        sound.pause();
    }
}

//empty function; code will be added later
function startButtonClick(){
    //don't let the user click the start button while the countdown is running
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;

     // this is a short hand to point to the 
     var countdownElem = document.getElementById("countdown");
     runTimer(countdownElem);
}

//array to hold interval ids returned from the setTimeout function
var arrInterval = new Array();

//empty function; code will be added later
function stopButtonClick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    for (counter = 0; counter < 11; counter++){
        clearTimeout(arrInterval[counter]);
    }
} 

//this is our new countdown function
function runTimer(countdownElem){
    // tracks the current countdown time
    var currTime = 50;

    // tracks the current timeout
    var timeout = 0;

    // this value will not change and creates the 5 second delay
    var timeoutIncrement = 1000;
    
    for(var counter=0; counter < 11; counter++){
        // comment this one
        arrInterval[counter] = setTimeout(function(){
            if(currTime == 0){
                alert("Blastoff!");
                countdownElem.innerHTML = "Launch successful!";
            }
            else if (currTime <25){
                countdownElem.innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
            }
            else{
                countdownElem.innerHTML = currTime;
            }
           
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + timeoutIncrement;
    }      
}

//this function will ask for a first name, last name and badge number 
//the names need to be less than 20 characters and the badge number needs to be 3 characters or less
function getUserInput(){
    var fullName = "";
    var badgeNumber = 0;

    do{
        var firstName = prompt("Please enter first name (under 10 characters): ");   
        var lastName = prompt("Please enter last name (under 10 characters): ");  

        fullName = firstName + " " + lastName;

        if (fullName.length > 20){
            alert("Please enter a shorter name. Length was: " + fullName.length);
        }
    }
    while(fullName.length > 20);

    do{
        badgeNumber = prompt("Please enter your badge number (3 digits max): ");

        if (badgeNumber > 999){
            alert("Please enter a badge number with 3 digits or fewer.");
        }
    }
    while(badgeNumber > 999);

    return fullName + " " + badgeNumber;
}
