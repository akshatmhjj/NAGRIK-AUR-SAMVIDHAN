// SEARCH BOX //


const suggestions = ["constitution", "about us", "games", "simplified constitution", "know you country",];

function showSuggestions(value) {
  const suggestionsBox = document.getElementById('suggestions-box');
  suggestionsBox.innerHTML = '';
  
  if (value.length === 0) {
    suggestionsBox.style.display = 'none';
    return;
  }
  
  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().startsWith(value.toLowerCase())
  );

  filteredSuggestions.forEach(suggestion => {
    const suggestionDiv = document.createElement('div');
    suggestionDiv.innerHTML = suggestion;
    suggestionDiv.onclick = () => {
      document.getElementById('search-input').value = suggestion;
      suggestionsBox.style.display = 'none';
    };
    suggestionsBox.appendChild(suggestionDiv);
  });

  suggestionsBox.style.display = 'block';
}

function redirectToSection() {
    const searchValue = document.getElementById('search-input').value.toLowerCase().trim();  // Normalize input
    console.log("Search input:", searchValue); // For debugging purposes

    // Define mapping of input to sections or URLs
    const sectionMap = {
      "know you country": "kyc.html#india-map",         
      "about us" : "about-us.html#Introduction",       
      "simplified constitution": "simp-cons.html#book-holder", 
      games: "games.html",      
      constitution: "our-constitution.html"
    };

    // Check if the search value matches a section or page
    const target = sectionMap[searchValue];

    if (target) {
      console.log("Redirecting to:", target); // For debugging purposes
      // Perform redirection to section or page
      window.location.href = target;
    } else {
      alert("No matching section or page found.");
    }
  }

   // Add event listener for keydown events on the search input
   document.getElementById('search-input').addEventListener('keydown', function(e) {
    const suggestionsBox = document.getElementById('suggestions-box');
    const suggestionsList = suggestionsBox.getElementsByTagName('div');

    if (e.key === 'ArrowDown') {
      e.preventDefault(); // Prevent cursor moving in the input

      // Move selection down
      if (selectedSuggestionIndex < suggestionsList.length - 1) {
        selectedSuggestionIndex++;
        highlightSuggestion(suggestionsList, selectedSuggestionIndex);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent cursor moving in the input

      // Move selection up
      if (selectedSuggestionIndex > 0) {
        selectedSuggestionIndex--;
        highlightSuggestion(suggestionsList, selectedSuggestionIndex);
      }
    } else if (e.key === 'Enter') {
      // If Enter is pressed, choose the highlighted suggestion
      if (selectedSuggestionIndex >= 0 && suggestionsList[selectedSuggestionIndex]) {
        document.getElementById('search-input').value = suggestionsList[selectedSuggestionIndex].textContent;
        suggestionsBox.style.display = 'none';
      }
    }
  });

  // Highlight the current suggestion and remove highlight from others
  function highlightSuggestion(suggestionsList, index) {
    for (let i = 0; i < suggestionsList.length; i++) {
      suggestionsList[i].classList.remove('active');
    }

    if (suggestionsList[index]) {
      suggestionsList[index].classList.add('active');
    }
  }

// SEARCH BOX END //


// TRANSLATION PART START//       // MAIN WORKING ENG-HINDI

function translateToHindi() {
  // Translate the necessary text elements to Hindi
  document.querySelector('title').textContent = 'नागरिक और संविधान';
  document.querySelector('.search-container input').placeholder = 'खोजें...';
  document.querySelector('.about-us h2').textContent = 'हमारे बारे में';

  // Maintain the HTML structure while updating the text for About Us
  document.querySelector('.about-us p').innerHTML = `
      <span style="font-weight: 600;">NAGRIK AND SAMVIDHAN</span>, हमारे भारत के संविधान को सरल और सभी के लिए अधिक सुलभ बनाने के लिए समर्पित हैं। हमारा मिशन जटिल कानूनी भाषा को सरल, समझने में आसान स्पष्टीकरणों में तोड़ना है ताकि नागरिक हमारे लोकतंत्र को परिभाषित करने वाले अधिकारों, कर्तव्यों और संरचनाओं के साथ अधिक गहराई से जुड़ सकें।<br /><br />
      हम मानते हैं कि ज्ञान शक्ति है, और संविधान को सभी के लिए सुलभ बनाकर, हम व्यक्तियों को समाज में उनकी भूमिका को बेहतर ढंग से समझने के लिए सशक्त बनाते हैं। चाहे आप एक छात्र हों, कानूनी पेशेवर हों, या जिज्ञासु नागरिक हों, हमारा मंच आपको संविधान के प्रमुख प्रावधानों की स्पष्ट, संक्षिप्त व्याख्याएं प्रदान करता है।<br /><br />
      हमारे साथ शामिल हों भारत के संविधान को समझने के लिए, जो सभी के लिए सरल बनाया गया है।
  `;

  document.querySelector('.content button a').textContent = 'और पढ़ें';

  document.querySelector('.card-footer').innerHTML = `
      माननीय राज्य मंत्री,<br />कानून और न्याय मंत्रालय <br />(स्वतंत्र प्रभार)<br />
      <span>श्री अर्जुन राम मेघवाल</span>
  `;

  document.querySelector('#openModalBtn').textContent = 'साइन अप / लॉग इन';

  // Update navbar translations
  document.querySelectorAll('.navbar .bar a')[0].textContent = 'मुख पृष्ठ'; // Home
  document.querySelectorAll('.dropdown .selected a')[0].textContent = 'हमारा संविधान'; // Our Constitution

  // Our Constitution Dropdown
  // document.querySelector('button.selected a[href="our-constitution.html"]').textContent = 'हमारा संविधान';


  document.querySelectorAll('.dropdown .selected a')[1].textContent = 'सरल संविधान'; // Simplified Constitution
  document.querySelectorAll('.bar a')[1].textContent = 'खेल'; // Games
  document.querySelectorAll('.bar a')[2].textContent = 'अपने देश को जानें'; // Know Your Country
  document.querySelectorAll('.dropdown .selected a')[2].textContent = 'हमारे बारे में'; // About Us

  const dropdowns = document.querySelectorAll('.dropdown-content');

  dropdowns[1].children[0].textContent = 'संविधान क्या है'; // What is Constitution
  dropdowns[2].children[0].textContent = 'संविधान की संरचना'; // Constitution structure
  dropdowns[2].children[1].textContent = 'अंश, अनुच्छेद और अनुसूचियों की सूची'; // List of Part, Articles, and Schedules
  dropdowns[3].children[0].textContent = 'परिचय'; // Introduction

  // Translate Footer Elements
  document.querySelector('.implink div:nth-child(1) p').textContent = 'हमारा संविधान';
  document.querySelector('.implink div:nth-child(1) ul li a').textContent = 'संविधान क्या है';
  document.querySelector('.implink div:nth-child(2) p').textContent = 'खेल';
  document.querySelector('.implink div:nth-child(2) ul li a').textContent = 'ज्ञान का पहिया';
  document.querySelector('.implink div:nth-child(3) p').textContent = 'हमारे बारे में';
  document.querySelector('.implink div:nth-child(3) ul li a').textContent = 'परिचय';

  document.querySelector('.contact-us p').textContent = 'संपर्क करें :';
  document.querySelector('.contact-us div:nth-child(2) p').textContent = 'सामाजिक मीडिया :';

  document.querySelector('.footer-main .rights p').textContent = 'सर्वाधिकार सुरक्षित। कोड हेक्स द्वारा संचालित।';
  document.querySelector('.govtweb div:nth-child(3) p').textContent = 'कॉपीराइट © 2024';
}

function translateToEnglish() {
  // Revert back to the English text
  document.querySelector('title').textContent = 'Nagrik and Samvidhan';
  document.querySelector('.search-container input').placeholder = 'Search...';
  document.querySelector('.about-us h2').textContent = 'ABOUT US';

  // Maintain the HTML structure while updating the text for About Us
  document.querySelector('.about-us p').innerHTML = `
      At <span style="font-weight: 600;">NAGRIK AND SAMVIDHAN</span> we are dedicated to simplifying and making the Constitution of India more accessible to everyone. Our mission is to break down complex legal language into simple, easy-to-understand explanations so that citizens can engage more deeply with the rights, duties, and structures that define our democracy.<br /><br />
      We believe that knowledge is power, and by making the Constitution accessible to all, we empower individuals to better understand their role in society. Whether you are a student, legal professional, or curious citizen, our platform provides you with clear, concise interpretations of the Constitution's key provisions.<br /><br />
      Join us in exploring the foundational document of India, made simpler for all to learn and engage with.
  `;

  document.querySelector('.content button a').textContent = 'READ MORE';

  document.querySelector('.card-footer').innerHTML = `
      Hon'ble Minister of State,<br />Ministry of Law and Justice <br />(Independent Charge)<br />
      <span>Shri Arjun Ram Meghwal</span>
  `;

  document.querySelector('#openModalBtn').textContent = 'SIGN UP / LOG IN';

  // Update navbar translations
  document.querySelectorAll('.navbar .bar a')[0].textContent = 'Home';
  document.querySelectorAll('.dropdown .selected a')[0].textContent = 'Our Constitution';
  document.querySelectorAll('.dropdown .selected a')[1].textContent = 'Simplified Constitution';
  document.querySelectorAll('.bar a')[1].textContent = 'Games';
  document.querySelectorAll('.bar a')[2].textContent = 'Know Your Country';
  document.querySelectorAll('.dropdown .selected a')[2].textContent = 'About Us';

  // Update the dropdown items
  const dropdowns = document.querySelectorAll('.dropdown-content');

  // For "Our Constitution"
  dropdowns[1].children[0].textContent = 'What is Constitution';

  // For "Simplified Constitution"
  dropdowns[2].children[0].textContent = 'Constitution structure';
  dropdowns[2].children[1].textContent = 'List of Part, Articles, and Schedules';

  // For "About Us"
  dropdowns[3].children[0].textContent = 'Introduction';

  // Revert Footer Elements back to English
  document.querySelector('.implink div:nth-child(1) p').textContent = 'Our Constitution';
  document.querySelector('.implink div:nth-child(1) ul li a').textContent = 'What is Constitution';
  document.querySelector('.implink div:nth-child(2) p').textContent = 'Games';
  document.querySelector('.implink div:nth-child(2) ul li a').textContent = 'Wheel of Knowledge';
  document.querySelector('.implink div:nth-child(3) p').textContent = 'About-us';
  document.querySelector('.implink div:nth-child(3) ul li a').textContent = 'Introduction';

  document.querySelector('.contact-us p').textContent = 'Contact Us:';
  document.querySelector('.contact-us div:nth-child(2) p').textContent = 'Social Media:';

  document.querySelector('.footer-main .rights p').textContent = 'All Rights Reserved. Powered by Code Hex.';
  document.querySelector('.govtweb div:nth-child(3) p').textContent = 'Copyright © 2024';
}

// // TRANSLATION PART END //




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

// IMAGE SLIDER //

let slides = document.querySelector(".slides");
let slideIndex = 0;
let dots = document.querySelectorAll(".dot");

function showSlide(index) {
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

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Auto Slide every 3 seconds
setInterval(nextSlide, 4000);


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

