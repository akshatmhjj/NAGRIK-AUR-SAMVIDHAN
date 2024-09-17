// POP-UP FORM Log in START // 

// Get the modal
var modal = document.getElementById("authModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var openSidebarBtn = document.getElementById("openSidebarBtn");

// Open the modal when the button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "block";
    hideForms(); // Hide both forms initially
}

// Close the modal when the user clicks on (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showForm(formId) {
    hideForms();
    document.getElementById(formId).style.display = 'block';
}

function hideForms() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
}

// Sign-Up Form Submission
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    // Store user details in local storage
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userPassword', password);

    document.getElementById('signupSuccessMessage').textContent = "Account created successfully!";
    setTimeout(function() {
        modal.style.display = "none"; // Close modal
        openSidebar(); // Show account sidebar
        updateAccountInfo();
    }, 1000);
});

// Log-In Form Submission
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    let loginPhone = document.getElementById('loginPhone').value;
    let loginPassword = document.getElementById('loginPassword').value;

    let storedPhone = localStorage.getItem('userPhone');
    let storedPassword = localStorage.getItem('userPassword');

    if (loginPhone === storedPhone && loginPassword === storedPassword) {
        modal.style.display = "none"; // Close modal
        openSidebar(); // Show account sidebar
        updateAccountInfo();
    } else {
        document.getElementById('loginErrorMessage').textContent = "Invalid phone number or password.";
    }
});

// POP-UP FORM Log in END // 


// Account SIDEBAR START // 

// Open Sidebar
function openSidebar() {
    document.getElementById("accountSidebar").style.width = "300px";
}

// Close Sidebar
function closeSidebar() {
    document.getElementById("accountSidebar").style.width = "0";
}

// Update Account Info
function updateAccountInfo() {
    document.getElementById('accountName').textContent = localStorage.getItem('userName');
    document.getElementById('accountPhone').textContent = localStorage.getItem('userPhone');
}

// Log Out Button
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.clear();
    closeSidebar();
    alert("You have been logged out.");
    location.reload(); // Redirect to home page
});

// Open Sidebar when the account button is clicked
openSidebarBtn.onclick = function() {
    openSidebar();
}

// Account SIDEBAR END // 


// INTRO TRANSITION +  CONTENT TRANSITION//

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.introduction, .introduction1, .introduction2');
  
  // Create an IntersectionObserver to observe when sections enter the viewport
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Zoom in the container (box)
        entry.target.classList.add('zoom-in');

        // After the box zooms in, fade in the content
        setTimeout(() => {
          const content = entry.target.querySelector('.introduction-content');
          if (content) {
            content.classList.add('fade-in');
          }
        }, 500); // Wait 500ms to start fading in the content after the zoom-in finishes

        // Stop observing once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the section is visible
  });

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});

// INTRO TRANSITION +  CONTENT TRANSITION END//


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

// Data for each state
const stateData = {
    'Jammu_and_Kashmir_disp': {
        name: 'Jammu and Kashmir',
        amendments: 'Article 370 (Special Status of J&K)',
        detailsUrl: 'jammu_kashmir.html'
    },
    'Ladakh_disp': {
        name: 'Ladakh',
        amendments: 'Ladakh Reorganization Act, 2019',
        detailsUrl: 'ladakh.html'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const states = document.querySelectorAll('.state');
    const popup = document.getElementById('popup');
  
    states.forEach(state => {
      const stateId = state.getAttribute('data-state-name');
  
      state.addEventListener('mouseover', (event) => {
        if (stateData[stateId]) {
          // Show popup after a slight delay
          setTimeout(() => {
            popup.innerHTML = `
                    <strong><center> ${stateData[stateId].name} </center></strong> <br/>
                    <strong>Amendments/Articles: </strong> ${stateData[stateId].amendments}
                `;
            popup.style.display = 'block';
            popup.style.left = event.pageX + 'px';
            popup.style.top = event.pageY + 'px';
          }, 0); // Adjust delay as needed
        }
      });
  
      state.addEventListener('mouseout', () => {
        popup.style.display = 'none';
      });
  
      state.addEventListener('click', () => {
        if (stateData[stateId] && stateData[stateId].detailsUrl) {
          window.location.href = stateData[stateId].detailsUrl;
        }
      });
    });
  
    // Keyboard navigation
    states.forEach(state => {
      state.setAttribute('tabindex', '0'); // Make elements focusable
    });
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('state')) {
          // Handle tab navigation between states
        }
      } else if (event.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('state')) {
          // Trigger click event on focused state
          focusedElement.click();
        }
      }
    });
  });