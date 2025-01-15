// This function is called when the window loads
window.onload=loadTrafficScreen;

// Define the text for the traffic choice scenario
const trafficText = "You got caught! You call a random cab on the streets but on the way to the museum the cab gets in a car crash. Authorities came and they saw you and recognized you from the boat. They arrested both you and the driver. Driver for drunk driving and you from threatening the police";
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