Random User Profile Generator

A simple web app that fetches random user data from the RandomUser.me API and displays a clean, responsive profile card. Each click of the Generate button loads a new profile (name, gender, email, phone, location, age, and avatar). Background color changes by gender for a subtle interactive effect.

Features
Fetches live user data from https://randomuser.me/api/
Displays: name, gender, email, phone, location, age, profile picture
Background color changes by gender (male → light blue, female → light pink)
Simple, responsive layout using TailwindCSS (CDN)
Clean, modular JavaScript (Fetch API + DOM manipulation)
Built With
HTML
CSS / TailwindCSS (CDN)
JavaScript (Fetch API)
Demo
Open index.html in your browser and click Generate to fetch a new profile.
Getting Started
Prerequisites
Modern browser (Chrome, Firefox, Edge, Safari)
Optional: Node / npm if you want to install Tailwind locally (for production)
Installation
Clone the repo:
git clone https://github.com/<your-username>/random-user-profile-generator.git
cd random-user-profile-generator
Open index.html in your browser.
Or serve with a simple static server:
npx http-server .
Usage
Click the Generate button to fetch and display a random user profile.
The app automatically fetches one profile on page load.
Example Code (core fetch)
function fetchUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => displayUser(data.results[0]))
    .catch(err => console.error('Fetch failed:', err));
}

function displayUser(user) {
  const userInfo = document.querySelector('#user');
  if (!userInfo) return;

  // Background by gender
  document.body.style.backgroundColor = user.gender === 'male' ? 'lightblue' : 'lightpink';

  // Optional heading for female users
  if (user.gender !== 'male') {
    // create and append heading safely if required
  }

  userInfo.innerHTML = `
    <div class="flex justify-between">
      <div class="flex">
        <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" alt="avatar"/>
        <div class="space-y-3">
          <p class="text-xl"><span class="font-bold">Name: </span>${user.name.first} ${user.name.last}</p>
          <p class="text-xl"><span class="font-bold">Gender: </span>${user.gender}</p>
          <p class="text-xl"><span class="font-bold">Email: </span>${user.email}</p>
          <p class="text-xl"><span class="font-bold">Phone: </span>${user.phone}</p>
          <p class="text-xl"><span class="font-bold">Location: </span>${user.location.city}, ${user.location.country}</p>
          <p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>
        </div>
      </div>
    </div>
  `;
}

Notes

This project uses the Tailwind CDN for quick prototyping. Tailwind warns that the CDN build is not recommended for production. For a production build, install Tailwind via npm and compile your CSS.
Always check for null when using document.querySelector(...) to avoid runtime errors.
Contributing
Contributions are welcome. To contribute:
Fork the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m 'Add feature')
Push to the branch (git push origin feature-name)
Open a pull request
License
This project is open source and available under the MIT License. See LICENSE for details.
Acknowledgements
RandomUser.me
 — API for generating random user data

TailwindCSS for utility-first styles
