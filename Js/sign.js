// Get the modal
var modal = document.getElementById("sign-up-modal");

// Get the button that opens the modal
var signUpLink = document.getElementById("sign-up-link");

// Get the <span> element that closes the modal
var closeModal = document.getElementById("close-modal");

// When the user clicks the "Don't have an account?" link, open the modal
signUpLink.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
