# ElectricPro - Electrical Company Management System

ElectricPro is a comprehensive web application for electrical companies and maintenance teams to manage tasks, track employee attendance, and organize schedules in one platform.

## Features

### Dashboard
- View key metrics: Active Tasks, Employees Present Today, Pending Tasks, Issues
- Recent Tasks section with task details
- Quick action buttons to access all main modules

### Task Management
- Add, edit, and delete tasks
- Assign tasks to employees
- Set task priority (High, Medium, Low)
- Track task status (Pending, In Progress, Completed)
- Filter and search tasks

### Attendance Management
- QR code scanner for employee check-in/check-out
- Real-time attendance tracking
- View attendance statistics
- Daily attendance logs

### Calendar & Scheduling
- Visual calendar with month/week/day views
- View tasks and schedules
- Add tasks directly from the calendar
- Color-coded task priorities

### Employee Management
- Add, edit, and remove employees
- View employee details and information
- Track employee attendance
- Search and filter employees

## Technology Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- React Icons
- React Calendar
- React Toastify
- Axios

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time updates
- Bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js and npm
- MongoDB
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/electricpro.git
cd electricpro
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables:
Create a `.env` file in the backend directory with the following:
```
MONGODB_URI=mongodb://localhost:27017/electricpro
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

4. Start the development servers:
```bash
# Start the backend server (from the backend directory)
npm run dev

# Start the frontend server (from the client directory)
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Register as an admin or employee
2. Log in with your credentials
3. Use the dashboard to get an overview of tasks and attendance
4. Navigate to different modules using the navigation bar
5. Manage tasks, track attendance, view the calendar, and manage employees

## Project Structure

```
electricpro/
├── backend/
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── index.js        # Main server file
└── client/
    ├── public/          # Static files
    └── src/
        ├── components/   # React components
        ├── context/      # Context API for state management
        └── utils/        # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
