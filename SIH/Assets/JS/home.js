// Get the popup form element
const popupForm = document.getElementById("popupForm");

// Get the button that opens the form
const openFormBtn = document.getElementById("openFormBtn");

// Get the form element
const form = document.getElementById("form");

// Show the form when the button is clicked
openFormBtn.addEventListener("click", function () {
    popupForm.style.display = "flex";
    // content.classList.add("blur");
});

// Close the form on form submission and clear input fields
form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // You can collect the name and phone number here
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // For now, we'll just log the input data
    console.log("Name:", name);
    console.log("Phone:", phone);

    // Close the form after submission
    popupForm.style.display = "none";

    // Clear the form fields
    form.reset();
});
