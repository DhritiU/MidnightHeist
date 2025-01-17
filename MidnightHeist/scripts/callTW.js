// This function is called when the window loads
window.onload=loadCallScreen;

/*
    This function initializes the call screen by starting the typewriter effect
    and storing the call activity in the session storage.
*/
function loadCallScreen()
{
    startTypewriter();
    storeCallActivity();
}

const callText = "You call a random cab on the streets but on the way to the museum the cab gets in a car crash. Authorities come and recognize you from the boat. They immediately arrest you!";
const speed = 10;
let i = 0;
/*
    This function creates a typewriter effect by displaying the callText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < callText.length)
    {
        document.getElementById("callText").innerHTML += callText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}

/*
    This function stores the call activity stage in the session storage.
*/
function storeCallActivity()
{
    sessionStorage.setItem("activityStage", "You Lost");
}