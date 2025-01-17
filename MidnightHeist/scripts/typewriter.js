// This function is called when the window loads
window.onload=startTypewriter;

// Define the text for the intro scenario
const introText = "Singapore is one of the richest countries in the world, they have the best technology and economy. You were part of an exclusive heist group that has been working with mafias to rob every museum in the world. You have been training in this program for about 5 years and today you are facing your biggest challenge. The Singapore diamond museum, the largest and most valuable museum in the world. However the heist did not go as planned, the Singaporean police found about your heist and were there waiting. The rest of your team has already been caught but you were quick and managed to start running away.";
const speed= 10; 
let i = 0;

/*
    This function creates a typewriter effect by displaying the introText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < introText.length)
    {
        document.getElementById("intro").innerHTML += introText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed)
    }
}
