# Portfolio Site

A full-stack portfolio website built with React (Vite) on the frontend and Express.js on the backend.

## Project Structure

```
PortfolioSite/
├── frontend/     # React + Vite app
└── backend/      # Express.js API server
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Start the Backend

```powershell
cd backend
npm start
```

The API runs at **http://localhost:3001**

For development with auto-reload:

```powershell
cd backend
npm run dev
```

### Start the Frontend

```powershell
cd frontend
npm run dev
```

The site runs at **http://localhost:5173**

### Run Both

Open two terminal windows:

**Terminal 1 – Backend:**
```powershell
cd c:\Users\swimm\PortfolioSite\backend
npm start
```

**Terminal 2 – Frontend:**
```powershell
cd c:\Users\swimm\PortfolioSite\frontend
npm run dev
```

Then visit **http://localhost:5173** in your browser.

## Using Ruby on Rails Instead

If you prefer Rails for the backend:

1. Install Ruby and Rails
2. From the project root:
   ```powershell
   rails new backend --api
   cd backend
   bundle install
   rails server -p 3001
   ```
3. Update the Vite proxy in `frontend/vite.config.js` to point to `http://localhost:3001`

The frontend is ready to work with any backend that exposes REST APIs.
