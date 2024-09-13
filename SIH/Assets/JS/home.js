// POP-UP FORM JS // 

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

// POP-UP FORM JS END //





// IMAGE SLIDER JS // 

let slides = document.querySelector(".slides");
let slideIndex = 0;
let dots = document.querySelectorAll(".dot");

function showSlide(index) {
    // Wrap the index for circular navigation
    if (index >= slides.children.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.children.length - 1;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateDots(slideIndex);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Next/Previous Controls
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Dot Controls
dots.forEach(dot => {
    dot.addEventListener("click", function() {
        slideIndex = parseInt(this.getAttribute("data-index"));
        showSlide(slideIndex);
    });
});

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Auto Slide every 3 seconds
setInterval(nextSlide, 3000);

// IMAGE SLIDER JS END //





// BACK TO TOP BTN JS // 

// Get the button:
let mybutton = document.getElementById("btt_btn");

let hideTimeout; // To track the timeout for hiding the button

// Show the button and hide it after 3-5 seconds
function showButtonTemporarily() {
    mybutton.style.display = "block";

    // Clear any previous hide timeout
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }

    // Hide the button after 3-5 seconds (4000ms in this case)
    hideTimeout = setTimeout(() => {
        mybutton.style.display = "none";
    }, 4000);
}


// When the user scrolls down 20px from the top of the document, show the button temporarily
window.onscroll = function() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        showButtonTemporarily();
    }
};

// Scroll to the top smoothly when clicking the button
function back_to_top() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// BACK TO TOP BTN JS END //





