# Taniya AI — AI-Powered Portfolio

Taniya AI is an AI-powered personal portfolio built with **React and Vite**. It combines a modern portfolio interface with an AI chat assistant that can answer questions about Taniya Negi's education, skills, projects, certifications, and experience.

The frontend communicates with a separate **FastAPI backend**, which handles the AI interaction through the Groq API.

## Features

* Interactive personal portfolio
* AI-powered portfolio assistant
* Chat interface for asking questions about Taniya
* Sections for:

  * About
  * Education
  * Skills
  * Projects
  * Experience
  * Certifications
  * Activities
* Markdown-formatted AI responses
* Responsive UI
* Separate frontend and backend architecture
* Environment-based API configuration

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* React Markdown

### Backend

* FastAPI
* Python
* Groq API
* Llama 3.3 70B

## System Architecture

```text
User
  |
  v
React Frontend
  |
  | POST /chat
  v
FastAPI Backend
  |
  v
Groq API
  |
  v
Llama 3.3 70B
  |
  v
AI Response
  |
  v
React Chat Interface
```

## Project Structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Activities.jsx
│   ├── Certifications.jsx
│   ├── Chat.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── hero.jsx
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/taniyaNegi10/taniya-ai.git
cd taniya-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the backend URL

Create a `.env` file in the project root:

```env
VITE_API_URL=http://127.0.0.1:8001
```

The `.env` file is intentionally excluded from Git using `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## Backend

The frontend requires the separate Taniya AI FastAPI backend to process AI chat requests.

Backend repository:

**taniya-ai-backend**

The backend runs locally on:

```text
http://127.0.0.1:8001
```

Make sure the backend is running before testing the AI chat.

## Security

API credentials and environment variables are not committed to the repository.

Sensitive configuration is stored in `.env`, which is excluded through `.gitignore`.

## Future Improvements

* Deploy frontend and backend
* Add automated testing
* Add persistent conversation sessions
* Improve error handling
* Add loading and retry states
* Add CI/CD with GitHub Actions
* Improve accessibility and responsive design

## Author

**Taniya Negi**

B.Tech — Computer Science & Engineering (AI & Data Science)

Interested in Artificial Intelligence, Machine Learning, Generative AI, and backend development.
