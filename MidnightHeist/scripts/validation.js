
/*
    This function validates the form fields and 
    displays error messages if the fields are invalid.
    If the fields are valid, it calls onSuccess function.
*/
function validateForm()
{
    const userValidation = document.getElementById("user");
    const passwordValidation = document.getElementById("password");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const regex= "/^[a-zA-Z]+$";

    let isValid = true;

    //Validate username
    if(userValidation.value.trim() === "")
    {
        usernameError.textContent = "Username is required.";
        userValidation.classList.add("invalid");        
        isValid = false;
    }
    else if(userValidation.value.length < 3)
    {
        usernameError.textContent = "Username must be at least 3 characters.";
        userValidation.classList.add("invalid");
        isValid = false;
    }
    else if(userValidation.value.length > 15)
    {
        usernameError.textContent = "Username must be less than 15 characters.";
        userValidation.classList.add("invalid");
        isValid = false;
    }
    else if(!/^[a-zA-Z]+$/.test(userValidation.value))
    {
        usernameError.textContent = "Username can only contain alphanumeric characters.";
        userValidation.classList.add("invalid");
        isValid = false;
    }
    else
        {
            userValidation.classList.remove("invalid");
            userValidation.textContent = "";
        }

    
    //Validate password
    if(passwordValidation.value.trim() === "")
    {
        passwordError.textContent = "Password is required.";
        passwordValidation.classList.add("invalid");
        isValid = false;
    }
    else if(passwordValidation.value.length < 6)
    {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordValidation.classList.add("invalid");
        isValid = false;
    }
    else
        {
            passwordValidation.classList.remove("invalid");
            passwordValidation.textContent = "";
        }

    if(isValid){
        userName=userValidation.value.trim();
      onSuccess();
    }else{
        event.preventDefault();
        return false;
    }
    
}

let userName;
/*
    This function is called when the form is successfully validated.
    It can be used to perform actions such as submitting the form or displaying a success message.
*/
function onSuccess(){
    console.log("Form is valid!");
    const successMsg = document.getElementById('success-message');
    successMsg.style.display = "block";
    event.preventDefault();
    sessionStorage.setItem("name", userName);
    setTimeout(function (){
        goToPage1();
    },1000);
}

/*
    This function redirects the user to the first page of the interactive story.
*/
function goToPage1() {
    startTracking();
    window.location.href = "C:\\Users\\udaya\\Desktop\\Rashmi\\MidnightHeist\\firstpage.htm";    
}

/*
    This function starts tracking the time when the user begins the interactive story.
    It stores the start time in the session storage.
*/
let startTime;
function startTracking() {
    startTime = new Date();
    sessionStorage.setItem("beginTime",startTime);
    console.log("start time is " , startTime);
}
