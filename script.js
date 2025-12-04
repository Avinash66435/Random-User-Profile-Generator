
// DOM Elements
const body = document.getElementById('body');
const profileImage = document.getElementById('profileImage');
const userName = document.getElementById('userName');
const userGender = document.getElementById('userGender');
const userAge = document.getElementById('userAge');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const userLocation = document.getElementById('userLocation');
const generateBtn = document.getElementById('generateBtn');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

// API URL
const API_URL = 'https://randomuser.me/api/';

// Background class constants
const BASE_BG_CLASSES = 'min-h-screen transition-colors duration-500 bg-gradient-to-br';
const BG_COLORS = {
    male: 'from-blue-400 to-blue-600',
    female: 'from-pink-400 to-pink-600',
    default: 'from-purple-400 to-purple-600'
};

// Function to fetch random user data
async function fetchRandomUser() {
    try {
        // Show loading indicator
        loadingIndicator.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        generateBtn.disabled = true;

        // Fetch data from API
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch user data (${response.status})`);
        }

        const data = await response.json();
        const user = data.results[0];

        // Display user data
        displayUser(user);

    } catch (error) {
        console.error('Error fetching user:', error);
        showError(error.message);
    } finally {
        // Hide loading indicator and re-enable button
        loadingIndicator.classList.add('hidden');
        generateBtn.disabled = false;
    }
}

// Function to display user data
function displayUser(user) {
    // Update profile image
    profileImage.src = user.picture.large;
    profileImage.alt = `${user.name.first} ${user.name.last}`;

    // Update name
    userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    // Update gender
    userGender.textContent = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);

    // Update age
    userAge.textContent = `${user.dob.age} years`;

    // Update email
    userEmail.textContent = user.email;

    // Update phone
    userPhone.textContent = user.phone;

    // Update location
    const location = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
    userLocation.textContent = location;

    // Change background color based on gender
    changeBackgroundColor(user.gender);
}

// Function to change background color based on gender
function changeBackgroundColor(gender) {
    const colorClasses = BG_COLORS[gender] || BG_COLORS.default;
    body.className = `${BASE_BG_CLASSES} ${colorClasses}`;
}

// Function to show error message
function showError(message) {
    errorText.textContent = message || 'Something went wrong. Please try again.';
    errorMessage.classList.remove('hidden');
}

// Event listener for generate button
generateBtn.addEventListener('click', fetchRandomUser);

// Set initial background color
body.className = `${BASE_BG_CLASSES} ${BG_COLORS.default}`;

// Load a random user on page load
window.addEventListener('DOMContentLoaded', fetchRandomUser);
=======
function fetchUser() {
  // showSpinner();
  fetch("https://randomuser.me/api/")
    .then((Response) => Response.json())
    .then((data) => {
      //  hideSpinner();
      displayUser(data.results[0]);
    });
}
function displayUser(user) {
  const userInfo = document.querySelector("#user");
  if (user.gender === "male") {
    document.body.style.backgroundColor = "#3DB6B1";
  } else {
    document.body.style.backgroundColor = "#1581BF";
  }
  const heading = document.querySelector("h1");
  heading.textContent = `${user.name.first} ${user.name.last}`;
  // heading.style.color = 'red';
  heading.style.fontWeight = "bold";
  heading.style.fontSize = "40px";
  heading.style.position = "fixed";
  heading.style.left = "50%";
  heading.style.transform = "translateX(-50%)";
  heading.style.bottom = "20px";
  heading.style.margin = "0";
  document.body.appendChild(heading);

  if (user.gender === "male") {
    heading.style.color = "#F1F3E0";
  } else {
    heading.style.color = "#C1E59F";
  }

  console.log(user);
  userInfo.innerHTML = ` 
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
               <p class="text-xl">
                <span class="font-bold">Gender: </span>${user.gender}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span>${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}
              </p>
              <p class="text-xl">
                <span class="font-bold">Country: </span>${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
      </div>
    `;
}
function showSpinner() {
  document.getElementById("spinner").style.display = "none";
}

document.body.style.transition = "background-color 0.9s ease";
document.querySelector("#generate").addEventListener("click", fetchUser);
fetchUser();

