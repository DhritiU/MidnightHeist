// This function is called when the window loads
window.onload=startTypewriter;

const stealText = "you hop on to a random motorcycle on the streets and start to drive towards the museum.Once you hop on the motorcycle you start driving but there's a lot of traffic which makes it hard to get to your destination.Do you drive through the traffic or take a shorter route and drive up a building and then start jumping over them?";
const speed = 10;
let i = 0;

/*
    This function creates a typewriter effect by displaying the stealText string
    one character at a time with a delay specified by the speed variable.
*/
function startTypewriter()
{
    if(i < stealText.length)
    {
        document.getElementById("stealText").innerHTML += stealText.charAt(i);
        i++;
        setTimeout(startTypewriter, speed);
    }
}