# SkillSwap: Mentor Management System

SkillSwap is a professional mentorship management platform built with React. It serves as a centralized registry for organizations to manage a directory of experts, track their availability, and handle student inquiries. This project demonstrates advanced React concepts, including asynchronous data management, multi-page routing, and polished user experience.

## Features

- **Analytics Dashboard**: View real-time statistics including total mentors, active availability, and average hourly rates.
- **Mentor Directory**: Browse a full list of experts with detailed profiles and status indicators.
- **Profile Management**: Complete CRUD (Create, Read, Update, Delete) functionality for mentor profiles.
- **Inquiry System**: Manage student booking requests with a dedicated interface to resolve or remove inquiries.
- **Safe Deletion**: Integrated confirmation dialogs to prevent accidental data loss.
- **Responsive UI**: A modular design that adapts to various screen sizes.

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router Dom
- **State Management**: React Hooks (useState, useEffect)
- **API Handling**: Fetch API / Axios
- **Notifications**: React Hot Toast
- **Dialogs**: SweetAlert2
- **Mock Backend**: JSON Server

## Project Structure

src/
├── components/       # Reusable UI components (Navbar, MentorCard, FormField)
├── pages/            # Main application views (Dashboard, Directory, AddMentor)
├── styles/           # External CSS stylesheets
├── App.jsx           # Root component and global state management
└── main.jsx          # Application entry point

## Installation and Setup

1. Clone the repository:
   git clone <your-repository-url>

2. Install the necessary dependencies:
   npm install react-router-dom react-hot-toast sweetalert2

3. Start the mock backend server:
   npx json-server --watch db.json --port 3000

4. Launch the development environment:
   npm run dev

## Usage

- **Dashboard**: Monitor the overall health and metrics of the mentorship network.
- **Mentors**: Use the directory to view all profiles. From here, you can initiate edit or delete actions.
- **Add Mentor**: Fill out the registration form to onboard new talent.
- **Inquiries**: Review and resolve incoming messages from students.

## License

This project is open-source and available under the MIT License.
