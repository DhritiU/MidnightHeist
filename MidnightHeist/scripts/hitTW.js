// This function is called when the window loads
window.onload=startTypewriter;

// Define the text for the hit choice scenario
const hitText = "You launch a missile at the police boat and start driving to land right away. You have to get away fast because now the authorities have been notified of your location! Once you reach land do you call a cab or steal someone's motorcycle?";
const speed = 10;
let i = 0;

/*
    This function creates a typewriter effect by displaying the hitText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < hitText.length)
    {
        document.getElementById("hitText").innerHTML += hitText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}