# Manager Backend

This is the backend for the Manager application, built with Express.js and MongoDB Atlas.

## Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables:
   - Make sure the `.env` file is properly set up with your MongoDB Atlas connection string.

3. Start the server:
   ```
   npm run dev
   ```
   For production:
   ```
   npm start
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/register` - Register a new user
  - Body: { username, email, password }
  - Returns: JWT token

- `POST /api/auth/login` - Login user
  - Body: { email, password }
  - Returns: JWT token

### Task Routes (`/api/tasks`)

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create a new task
  - Body: { title, description, status, priority, assignedTo, createdBy }
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Database Models

### User
- username (String, required, unique)
- email (String, required, unique)
- password (String, required)
- role (String, enum: ['user', 'admin'], default: 'user')
- createdAt (Date, default: Date.now)

### Task
- title (String, required)
- description (String, required)
- status (String, enum: ['todo', 'in-progress', 'completed'], default: 'todo')
- priority (String, enum: ['low', 'medium', 'high'], default: 'medium')
- assignedTo (ObjectId, ref: 'User')
- createdBy (ObjectId, ref: 'User', required)
- createdAt (Date, default: Date.now)
- updatedAt (Date, default: Date.now)
