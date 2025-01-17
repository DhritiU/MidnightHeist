// This function is called when the window loads
window.onload=startTypewriter;

const driveAwayText = "You drove away from the boat and the police boat did not see you which means you safely escaped. Now that you have reached the city of Singapore, you need to get to leave the city as fast as possible without getting caught.  Do you call a cab or steal someone's motorcycle?";
const speed = 10;
let i = 0;
/*
    This function creates a typewriter effect by displaying the driveAwayText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < driveAwayText.length)
    {
        document.getElementById("driveAwayText").innerHTML += driveAwayText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}