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
            throw new Error('Failed to fetch user data');
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
    if (gender === 'male') {
        // Blue gradient for male
        body.className = 'min-h-screen transition-colors duration-500 bg-gradient-to-br from-blue-400 to-blue-600';
    } else if (gender === 'female') {
        // Pink gradient for female
        body.className = 'min-h-screen transition-colors duration-500 bg-gradient-to-br from-pink-400 to-pink-600';
    } else {
        // Default gradient
        body.className = 'min-h-screen transition-colors duration-500 bg-gradient-to-br from-purple-400 to-purple-600';
    }
}

// Function to show error message
function showError(message) {
    errorText.textContent = message || 'Something went wrong. Please try again.';
    errorMessage.classList.remove('hidden');
}

// Event listener for generate button
generateBtn.addEventListener('click', fetchRandomUser);

// Set initial background color
body.className = 'min-h-screen transition-colors duration-500 bg-gradient-to-br from-purple-400 to-purple-600';

// Load a random user on page load
window.addEventListener('DOMContentLoaded', fetchRandomUser);
