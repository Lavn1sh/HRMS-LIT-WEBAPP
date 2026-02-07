# HRMS Lite – Full Stack Web Application

## Project Overview
HRMS Lite is a lightweight Human Resource Management System designed for small to medium organizations. 
It allows an admin to manage employee records and track daily attendance. The app focuses on **essential HR operations** with a clean, professional interface.
**Features:**
- Add, view, and delete employees with unique ID, name, email, and department.
- Mark attendance for employees and view attendance history.
- Clean and modular React frontend with Tailwind CSS.
- Node.js + Express backend with PostgreSQL database.
- Proper error handling, validation, and meaningful UI states.
## Tech Stack Used
**Frontend:**
- React.js (TypeScript)
- Tailwind CSS
- Axios (for API requests)
**Backend:**
- Node.js + Express
- PostgreSQL
- dotenv (environment variables)
- CORS
**Deployment:**
- Frontend: Vercel / Netlify (to be deployed)
- Backend: Render / Railway (to be deployed)
## Steps to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Sumukhi90/HRMS-Lite-WebApp.git
cd HRMS-Lite-WebApp

**Backend setup**
cd server
npm install
# Create a .env file with your PostgreSQL connection
# Example .env:
# DB_HOST=localhost
# DB_USER=postgres
# DB_PASSWORD=password
# DB_NAME=hrms_lite
npm start

**Frontend setup**
cd ../client
npm install
npm start


Frontend runs on: http://localhost:3000
Backend runs on: http://localhost:5000 (or the port you set in .env)

**Assumptions / Limitations**

-Single admin user (no authentication implemented)
-Deployment URLs need to be updated once hosted on Vercel/Netlify and Render/Railway


---

### **2️⃣ Commit and Push**
After creating `README.md`:

```bash
git add README.md
git commit -m "Add README with project overview, tech stack, and instructions"
git push origin main

  
