// This function is called when the window loads
window.onload = startTypewriter;

// Retrieve the username from session storage
const usernameFromSession = sessionStorage.getItem("name");

// Define the text for the first choice scenario
const firstChoiceText = usernameFromSession + " begin in a small boat in the Singapore River, close to the city. You are overlooking the city on the boat and figuring out the next best course of action. \n Do you drive the boat all the way to the land or get out and swim to the land?";
const speed = 10;
let i = 0;

/*
    This function creates a typewriter effect by displaying the firstChoiceText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < firstChoiceText.length)
    {
        document.getElementById("storyBegins").innerHTML += firstChoiceText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}