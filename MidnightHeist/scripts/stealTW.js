// This function is called when the window loads
window.onload=startTypewriter;

const stealText = "You hop onto a random motorcycle you see on the streets. Once you hop on the motorcycle you start driving but there's a lot of traffic which makes it hard to get to your destination. Do you drive through the traffic or take a shorter route and drive through the alleys";
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