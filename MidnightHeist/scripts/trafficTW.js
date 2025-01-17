// This function is called when the window loads
window.onload=loadTrafficScreen;

// Define the text for the traffic choice scenario
const trafficText = "The streets are extremely crowded as you try to navigate through them. But your 5 years of training covered how to maneuver between cars and you manage to leave the city. You escaped!";
const speed = 10;
let i = 0;

/*
    This function is called when the window loads
*/
function loadTrafficScreen()
{
    startTypewriter();
    storeTrafficActivity();
}

/*
    This function creates a typewriter effect by displaying the trafficText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < trafficText.length)
    {
        document.getElementById("trafficText").innerHTML += trafficText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}

/*
    This function stores the activity stage in the session storage.
*/
function storeTrafficActivity()
{
    sessionStorage.setItem("activityStage", "You Won");
}