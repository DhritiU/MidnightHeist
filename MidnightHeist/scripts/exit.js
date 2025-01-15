// Get the elements for the exit button, confirm exit button, and confirm cancel button
const exitBTNID = document.getElementById("exitBTN");
const confirmExitID = document.getElementById("confirmExit");
const confirmCancelID = document.getElementById("confirmCancel");

// Add event listener to the exit button to show the exit confirmation modal
exitBTNID.addEventListener('click', () => {
    exitModal.style.display = 'block'; // Show the modal
    confirmationModal.style.display = 'flex'; // Show the confirmation modal
});

// Add event listener to the confirm exit button to go to the home screen and hide the confirmation modal
confirmExitID.addEventListener('click', () => {
    goToHome(); // Go to home screen
    confirmationModal.style.display = 'none'; // Hide the exit confirmation
});

// Add event listener to the confirm cancel button to hide the confirmation modal
confirmCancelID.addEventListener('click', () => {
    confirmationModal.style.display = 'none'; // Hide the confirmation modal
});