# Random User Profile Generator

A simple and interactive web application that fetches random user data from the [RandomUser.me API](https://randomuser.me/) and displays it in a clean, modern UI. Each time the user clicks the "Generate" button, a new profile is loaded with details including name, gender, email, phone, age, location, and profile picture.

## Features

- 🎲 **Random User Generation**: Fetches live user data from RandomUser.me API
- 🎨 **Dynamic Background**: Background color changes based on user gender
  - Blue gradient for male users
  - Pink gradient for female users
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Instant profile updates on button click
- 🎯 **User-Friendly Interface**: Clean and intuitive design using TailwindCSS
- 🔄 **Error Handling**: Graceful error messages if API calls fail
- 🖼️ **Profile Display**: Shows complete user information including:
  - Profile picture
  - Full name with title
  - Gender
  - Age
  - Email address
  - Phone number
  - Location (City, State, Country)

## Technologies Used

- **HTML5**: Structure and content
- **TailwindCSS (CDN)**: Modern, utility-first CSS framework for styling
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **Fetch API**: Asynchronous data fetching from RandomUser.me
- **RandomUser.me API**: Free API for generating random user data

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (required for TailwindCSS CDN and API calls)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Avinash66435/Random-User-Profile-Generator.git
```

2. Navigate to the project directory:
```bash
cd Random-User-Profile-Generator
```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local development server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. Open your browser and navigate to `http://localhost:8000`

## Usage

1. **Initial Load**: A random user profile is automatically generated when the page loads
2. **Generate New Profile**: Click the "Generate Random User" button to fetch a new random profile
3. **View Details**: All user information is displayed in an easy-to-read card format
4. **Background Changes**: Notice the background color transition based on the user's gender

## Project Structure

```
Random-User-Profile-Generator/
├── index.html          # Main HTML file with UI structure
├── script.js           # JavaScript file with API logic and DOM manipulation
└── README.md          # Project documentation
```

## Code Overview

### index.html
- Contains the structure of the user profile card
- Includes TailwindCSS via CDN for styling
- Responsive design with modern UI elements
- Loading indicator and error message components

### script.js
- Fetches data from RandomUser.me API using Fetch API
- Updates DOM elements dynamically with user data
- Handles gender-based background color changes
- Implements error handling for failed API requests
- Auto-loads a user profile on page load

## API Reference

This project uses the [RandomUser.me API](https://randomuser.me/):
- **Endpoint**: `https://randomuser.me/api/`
- **Method**: GET
- **Response**: JSON object containing random user data

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add ability to search/filter by gender or nationality
- Save favorite profiles to local storage
- Add more user details (username, date of birth, etc.)
- Implement dark mode toggle
- Add animation effects on profile updates
- Export profile as PDF or image

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [RandomUser.me](https://randomuser.me/) for providing the free API
- [TailwindCSS](https://tailwindcss.com/) for the excellent CSS framework
- Icons from Heroicons (included in TailwindCSS)

## Author

**Avinash66435**
- GitHub: [@Avinash66435](https://github.com/Avinash66435)

---

Made with ❤️ using HTML, TailwindCSS, and JavaScript
