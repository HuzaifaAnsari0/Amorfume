# [Amorfume](https://amorfume.com)

This project is a starter template for a MERN (MongoDB, Express, React, Node) stack application using TypeScript, Vite, and other essential tools. This setup allows for efficient development in a TypeScript environment.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development)
- [Git](https://git-scm.com/downloads)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-name>
```

### 2. Install Dependencies

Install dependencies for both the server (backend) and client (frontend).

```bash
# In the root directory
npm install
```

### 3. Setting Up Environment Variables

Create `.env` files in both the root and `client` folders for managing environment-specific configurations.

- **Backend** (`.env` in the root folder):

  ```plaintext
  MONGODB_URI=your_mongodb_connection_string
  PORT=5000
  FRONTEND_URL=http://localhost:3000
  JWT_SECRET=your string
  GOOGLE_CLIENT_ID=your string
  GOOGLE_CLIENT_SECRET=your string
  SESSION_SECRET =your string
  RAZORPAY_SECRET=your string
  RAZORPAY_KEY_ID=your string
  SMTP_HOST=your string
  SMTP_PORT=your string
  EMAIL_USER=your string
  EMAIL_PASS=your string
  ```

- **Frontend** (`client/.env`):

  ```plaintext
  VITE_BACKEND_URL=http://localhost:5000
  ```


## Installation and Development

### Backend (Server)

- Navigate to the `server` directory and install dependencies.

  ```bash
  cd server
  npm install
  ```

- Run the server in development mode.

  ```bash
  npm run dev
  ```

### Frontend (Client)

- Navigate to the `client` directory and install dependencies.

  ```bash
  cd ../client
  npm install
  ```

- Start the client in development mode.

  ```bash
  npm run dev
  ```

### Run the Full Stack Application

Open two terminals:

- In one terminal, start the backend server.
- In the other, start the frontend.

The app will be running on:

- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:3000](http://localhost:3000)

## Available Scripts

### Backend

- `npm run dev` – Start the backend server in development mode.
- `npm run build` – Build the backend TypeScript code.
- `npm run start` – Run the backend server in production mode.

### Frontend

- `npm run dev` – Start the frontend in development mode.
- `npm run build` – Build the frontend for production.
- `npm run preview` – Preview the frontend build.

## Technologies Used

- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend framework
- **Node.js** – Runtime environment
- **TypeScript** – For type safety and better development experience
- **Vite** – Fast development server for frontend

## License

This project is licensed under the MIT License.
