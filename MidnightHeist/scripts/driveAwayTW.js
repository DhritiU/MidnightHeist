// This function is called when the window loads
window.onload=startTypewriter;

const driveAwayText = "You drove away from the boat and the police’s boat didn’t see you which means you safely escaped.” Chances of getting caught: 30%";
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