// This function is called when the window loads
window.onload=loadJumpScreen;

const jumpText = "You start jumping over buildings but one of the gaps is too big and you fall forwards down to the ground. You become severely injured and the authorities find you. You get caught and end up in jail.";
const speed = 10;
let i = 0;
/*
    This function is called when the window loads
*/
function loadJumpScreen()
{
    startTypewriter();
    storeJumpActivity();
}

/*
    This function creates a typewriter effect by displaying the jumpText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < jumpText.length)
    {
        document.getElementById("jumpText").innerHTML += jumpText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}

/*
    This function stores the activity stage in the session storage.
*/
function storeJumpActivity()
{
    sessionStorage.setItem("activityStage", "You Lost");
}