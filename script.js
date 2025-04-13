// Function to reveal the proposal message
function revealProposal() {
    // Get the proposal message element
    const proposalMessage = document.getElementById("proposalMessage");
    
    // Check if the message is currently hidden
    if (proposalMessage.style.display === "none" || proposalMessage.style.display === "") {
        // Show the proposal message
        proposalMessage.style.display = "block";
    } else {
        // Hide the proposal message
        proposalMessage.style.display = "none";
    }
}

// Add event listener to the button
document.getElementById("revealButton").addEventListener("click", revealProposal);