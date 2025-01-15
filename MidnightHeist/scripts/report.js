// This function is called when the window loads
window.onload = getReportValues;

let stopTime;
let startingTime;
let totalTime;
let endActivity;

/*
    This function retrieves and displays the report values such as username, 
    duration of the activity, and the end activity stage.
*/
function getReportValues()
{
    getUsername();
    calcDuration();
    displayTime();
    displayActivity();
}

/*
    This function retrieves the username from session storage and displays it 
    in the userNamedisplayArea element.
*/
function getUsername() 
{
    let username = sessionStorage.getItem("name");
    if (username)
    {
        document.getElementById("userNamedisplayArea").textContent = username;
    }
} 

/*
    This function calculates the duration of the activity by subtracting the 
    starting time from the stop time and converts it to seconds.
*/
function calcDuration()
{
    stopTime = new Date();
    sessionStorage.setItem("endTime", stopTime);
    startingTime = new Date(sessionStorage.getItem("beginTime"));
    totalTime = stopTime.getTime() - startingTime.getTime();
    totalTime = Math.floor(totalTime / 1000);
}

/*
    This function displays the total duration of the activity in the 
    userDurationDisplayArea element.
*/
function displayTime()
{
    document.getElementById("userDurationDisplayArea").textContent = totalTime;
}

/*
    This function retrieves the end activity stage from session storage and 
    can be used to display it or perform other actions based on the activity stage.
*/
function displayActivity()
{
    endActivity = sessionStorage.getItem("activityStage");
    // Add your logic to display or handle the end activity stage here
    document.getElementById("userActivityDisplayArea").textContent = endActivity;
}

function signOut()
{
    const signOutModal = document.getElementById("signOutModal");
    signOutModal.style.display = 'flex';

    setTimeout(function()
    {
        signOutGame();
    }, 2500);
}

function signOutGame()
{
    sessionStorage.clear();
    window.location.href = "C:\\Users\\udaya\\Desktop\\Rashmi\\MidnightHeist\\index.htm";
}