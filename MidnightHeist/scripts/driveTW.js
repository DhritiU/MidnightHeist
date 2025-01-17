// This function is called when the window loads
window.onload = startTypewriter;

const driveText = "You start driving the boat towards land but a local water police sees you and begins to question you and threaten to arrest you. Do you drive away from the police or hit their boat?";
const speed = 10;
let i = 0;

/*
    This function creates a typewriter effect by displaying the driveText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < driveText.length)
    {
        document.getElementById("driveText").innerHTML += driveText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}