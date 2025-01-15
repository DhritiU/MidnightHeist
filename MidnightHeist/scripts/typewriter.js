// This function is called when the window loads
window.onload=startTypewriter;

// Define the text for the intro scenario
const introText = "Singapore is one of the richest countries in the world, they have the best technology and economy. You are in an exclusive heist group that has been working with mafias to rob every museum in the world. You have been training in this program for about 5 years and today you are facing your biggest challenge. The Singapore diamond museum, the largest and most valuable museum in the world. There is one necklace that your group is aiming to rob, it is worth about 28.5million dollars. However, the law enforcement are already aware that a potential heist may go down tonight. This museum is the hardest by far because of the extensive security measures put in place.";
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
