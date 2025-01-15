// This function is called when the window loads
window.onload = loadSwimCaughtScreen;

// Define the text for the swim caught scenario
const swimCaughtText = "You got caught!!!";
const speed = 10;
let i = 0;

/*
    This function initializes the swim caught screen by starting the typewriter effect
    and storing the swim activity in the session storage.
*/
function loadSwimCaughtScreen()
{
    startTypewriter();
    storeSwimActivity();
}

/*
    This function creates a typewriter effect by displaying the swimCaughtText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < swimCaughtText.length)
    {
        document.getElementById("swimText").innerHTML += swimCaughtText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}

/*
    This function stores the swim activity stage in the session storage.
*/
function storeSwimActivity()
{
    sessionStorage.setItem("activityStage", "You Lost");
}