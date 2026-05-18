<div align="center">



<h1>⚡ Job Prep — AI-Powered Interview Preparation Platform</h1>

<p><strong>From zero to interview-ready in one shot.</strong><br/>
Upload your resume. Drop a job description. Get AI-powered gap analysis, interview questions, and an ATS-optimized resume — all powered by Gemini AI.</p>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-job--prep--front.onrender.com-6366F1?style=for-the-badge&logoColor=white)](https://job-prep-front.onrender.com/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-Google-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## 📸 What Is This?

**Job Prep** is a full-stack Gen AI web application built in **one shot** — covering everything from authentication, resume PDF parsing, AI-powered skill gap detection, to generating ATS-optimized resumes using **Puppeteer** and **Gemini AI**.

> Think of it as your personal AI career coach — 24/7, no judgment, no scheduling.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **JWT Authentication** | Secure signup/login with bcrypt hashed passwords + cookie-based sessions |
| 📄 **Resume Upload & Parsing** | Upload PDF resumes, parsed server-side using `pdf-parse` |
| 🧠 **AI Skill Gap Analysis** | Gemini AI compares your resume to a job description and identifies missing skills |
| 🎯 **Interview Question Generator** | Role-specific, AI-generated questions tailored to your resume + JD |
| 📝 **ATS Resume Generator** | Puppeteer renders and exports a polished, ATS-friendly PDF resume |
| ✅ **Zod Schema Validation** | End-to-end input validation with `zod` + `zod-to-json-schema` |
| 🌐 **CORS + Cookie Support** | Secure cross-origin requests with `cors` and `cookie-parser` |

---

## 🛠️ Tech Stack

### 🖥️ Frontend

```
React 19         →  UI Framework
React Router 7   →  Client-side routing
Axios            →  HTTP client
Sass             →  Styling with superpowers
```

### ⚙️ Backend

```
Express 5        →  HTTP server & routing
MongoDB          →  Database (via Mongoose)
JWT              →  Authentication tokens
bcryptjs         →  Password hashing
Multer           →  File upload handling
pdf-parse        →  Extract text from uploaded PDFs
Puppeteer        →  Headless browser for PDF generation
Zod              →  Input validation + JSON schema
@google/genai    →  Gemini AI integration
```

---

## 🏗️ Project Structure

```
job-prep/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route-based pages
│   │   ├── services/           # Axios API calls
│   │   └── styles/             # Sass stylesheets
│   └── package.json
│
├── server/                     # Node.js backend
│   ├── controllers/            # Route handler logic
│   ├── middleware/             # Auth, error handling, multer
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # Express route definitions
│   ├── utils/                  # Gemini AI, Puppeteer helpers
│   └── index.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.x`
- MongoDB (local or Atlas)
- Google Gemini API Key → [Get one here](https://aistudio.google.com/app/apikey)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-prep.git
cd job-prep
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
CLIENT_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in `/client`:

```env
VITE_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

---

### 4. Open in Browser

```
http://localhost:5173
```

---

## 🔄 Application Flow

```
User Signup/Login
      │
      ▼
Upload Resume (PDF)
      │
      ▼
pdf-parse extracts text
      │
      ▼
Paste Job Description
      │
      ▼
Gemini AI analyzes:
  ├── Skill Gap Detection
  ├── Interview Questions
  └── ATS Resume Builder
              │
              ▼
Puppeteer renders → PDF Download
```

---

## 📡 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/register` | Register new user |
| `POST` | `/login` | Login + set JWT cookie |
| `POST` | `/logout` | Clear session cookie |

### Resume Routes — `/api/resume`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/upload` | Upload + parse PDF resume |
| `GET` | `/` | Get user's resume data |

### AI Routes — `/api/ai`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/skill-gap` | Analyze skill gaps vs JD |
| `POST` | `/interview-questions` | Generate interview questions |
| `POST` | `/generate-resume` | Build ATS resume → PDF via Puppeteer |

---

## 🔐 Authentication Flow

```
Client → POST /api/auth/login
              ↓
       Validate with Zod
              ↓
     Check user in MongoDB
              ↓
     bcryptjs.compare(password)
              ↓
     Sign JWT → Set HttpOnly Cookie
              ↓
     Protected routes use verifyToken middleware
```

---

## 🤖 Gemini AI Integration

The app uses `@google/genai` to interact with **Gemini 1.5 Flash/Pro** for:

- **Skill Gap Analysis**: Compares extracted resume text with job description → returns structured JSON of missing skills
- **Interview Question Generation**: Generates role-specific questions with difficulty levels
- **ATS Resume Optimization**: Rewrites resume content tailored to the job description

Responses are validated using `zod-to-json-schema` to ensure structured, reliable AI output.

---

## 📦 Dependencies

### Backend

| Package | Version | Purpose |
|---|---|---|
| `express` | `^5.2.1` | HTTP server |
| `mongoose` | `^9.2.1` | MongoDB ODM |
| `jsonwebtoken` | `^9.0.3` | Auth tokens |
| `bcryptjs` | `^3.0.3` | Password hashing |
| `multer` | `^2.0.2` | File uploads |
| `pdf-parse` | `^2.4.5` | PDF text extraction |
| `puppeteer` | `^24.37.5` | PDF generation |
| `@google/genai` | `^1.42.0` | Gemini AI |
| `zod` | `^3.25.76` | Schema validation |
| `cors` | `^2.8.6` | Cross-origin requests |
| `cookie-parser` | `^1.4.7` | Cookie handling |
| `dotenv` | `^17.4.2` | Environment variables |

### Frontend

| Package | Version | Purpose |
|---|---|---|
| `react` | `^19.2.0` | UI library |
| `react-dom` | `^19.2.0` | DOM rendering |
| `react-router` | `^7.13.0` | Client routing |
| `axios` | `^1.13.5` | HTTP requests |
| `sass` | `^1.97.3` | CSS preprocessing |

---

## 🌍 Deployment

The app is deployed on **Render**:

- **Frontend**: [https://job-prep-front.onrender.com](https://job-prep-front.onrender.com/)
- **Backend**: Render Web Service (Node.js)
- **Database**: MongoDB Atlas

> ⚠️ Note: Free tier on Render spins down after inactivity. First load may take 30–60 seconds.

---

## 🧑‍💻 Author

Built with ❤️ and a lot of `console.log()` debugging.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**If this project helped you, drop a ⭐ — it means the world!**



</div>
