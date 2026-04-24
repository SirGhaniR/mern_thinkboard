<div align="center">

# 📋 MERN ThinkBoard

**A RESTful notes management API built with Express.js and MongoDB**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas%20%7C%20Local-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

</div>

---

## 📖 Overview

**MERN ThinkBoard** is a backend REST API for managing notes, built as the server-side foundation of a full MERN stack application. It provides a complete set of CRUD endpoints for creating, reading, updating, and deleting notes, backed by MongoDB for persistent storage.

The project follows a clean MVC architecture with separated concerns — routes, controllers, models, and configuration — making it easy to understand, extend, and integrate with any frontend client.

### Who is this for?

- Developers learning the **MERN stack** who want a clean, well-structured backend reference
- Contributors looking for an **open-source project** to practice with
- Anyone needing a **lightweight notes API** to integrate with a frontend application

---

## 🌐 Live Preview

> **No live deployment is currently available.** This is a backend API that runs locally and requires a MongoDB connection. See [Getting Started](#-getting-started) to run it on your machine.

---

## ✨ Features

- **Full CRUD Operations** — Create, read, update, and delete notes via RESTful endpoints
- **Versioned API** — All routes are namespaced under `/api/v1/` for clean API versioning
- **Sorted Results** — Notes are automatically returned sorted by newest first (`createdAt` descending)
- **Proper Error Handling** — Try-catch blocks with structured JSON error responses and 404 handling for missing resources
- **Auto Timestamps** — Every note automatically tracks `createdAt` and `updatedAt` via Mongoose timestamps
- **ES Modules** — Uses modern JavaScript `import/export` syntax throughout
- **Environment Configuration** — Database URI and port are configurable via `.env` file using dotenv
- **Hot Reloading** — Development server uses nodemon for automatic restarts on file changes

---

## 🛠 Tech Stack

| Layer          | Technology                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **Runtime**    | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)                  |
| **Framework**  | ![Express.js](https://img.shields.io/badge/Express.js%205-000000?logo=express&logoColor=white)           |
| **Database**   | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)                    |
| **ODM**        | ![Mongoose](https://img.shields.io/badge/Mongoose%209-880000?logo=mongoose&logoColor=white)              |
| **Dev Server** | ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=white)                    |
| **Config**     | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?logo=dotenv&logoColor=black)                       |
| **Language**   | ![JavaScript](https://img.shields.io/badge/JavaScript%20(ES%20Modules)-F7DF1E?logo=javascript&logoColor=black) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **npm** (comes with Node.js)
- **[MongoDB](https://www.mongodb.com/)** — either a local instance or a [MongoDB Atlas](https://www.mongodb.com/atlas) cloud cluster

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SirGhaniR/mern_thinkboard.git
   cd mern_thinkboard
   ```

2. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file inside the `backend/` directory:

   ```bash
   touch .env
   ```

   Add the following variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/thinkboard
   PORT=5001
   ```

   > Replace the `MONGODB_URI` value with your MongoDB Atlas connection string if using a cloud database.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5001` (or the port you specified in `.env`).

5. **Start in production mode**

   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
mern_thinkboard/
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md           # Bug report issue template
│       └── feature_request.md      # Feature request issue template
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection logic using Mongoose
│   │   ├── controllers/
│   │   │   └── notesController.js  # CRUD handlers for notes (get, create, update, delete)
│   │   ├── models/
│   │   │   └── Note.js             # Mongoose schema & model for Note (title, content, timestamps)
│   │   ├── routes/
│   │   │   └── notesRoutes.js      # Express router mapping HTTP methods to controller functions
│   │   └── app.js                  # Application entry point — Express server setup & middleware
│   ├── .gitignore                  # Node.js gitignore (includes .env, node_modules, etc.)
│   ├── package.json                # Project metadata, scripts, and dependencies
│   └── package-lock.json           # Locked dependency tree
└── README.MD
```

---

## 📝 Usage

### API Endpoints

All endpoints are prefixed with `/api/v1/notes`.

| Method   | Endpoint             | Description              | Request Body                    |
| -------- | -------------------- | ------------------------ | ------------------------------- |
| `GET`    | `/api/v1/notes`      | Fetch all notes (newest first) | —                               |
| `GET`    | `/api/v1/notes/:id`  | Fetch a single note by ID | —                               |
| `POST`   | `/api/v1/notes`      | Create a new note        | `{ "title": "...", "content": "..." }` |
| `PUT`    | `/api/v1/notes/:id`  | Update an existing note  | `{ "title": "...", "content": "..." }` |
| `DELETE` | `/api/v1/notes/:id`  | Delete a note by ID      | —                               |

### Example Requests

**Create a note:**

```bash
curl -X POST http://localhost:5001/api/v1/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My First Note", "content": "This is the content of my note."}'
```

**Fetch all notes:**

```bash
curl http://localhost:5001/api/v1/notes
```

**Update a note:**

```bash
curl -X PUT http://localhost:5001/api/v1/notes/<note_id> \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "content": "Updated content."}'
```

**Delete a note:**

```bash
curl -X DELETE http://localhost:5001/api/v1/notes/<note_id>
```

### Response Format

All responses follow a consistent JSON structure:

```json
{
  "success": true,
  "message": "Notes has been fetched successfully",
  "data": [ ... ]
}
```

On error:

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## 🤝 Contributing

Contributions are welcome! Whether you're fixing a bug, improving documentation, or suggesting a new feature — your help is appreciated.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch from `main`
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make** your changes and commit with clear, descriptive messages
   ```bash
   git commit -m "feat: add your feature description"
   ```
4. **Push** to your fork
   ```bash
   git push origin feat/your-feature-name
   ```
5. **Open** a Pull Request against the `main` branch

### Reporting Bugs

Found a bug? [Open a bug report](https://github.com/SirGhaniR/mern_thinkboard/issues/new?template=bug_report.md) using the provided issue template. Include:

- A clear description of the bug
- Steps to reproduce the behavior
- Expected vs. actual behavior
- Screenshots (if applicable)

### Suggesting Features

Have an idea? [Submit a feature request](https://github.com/SirGhaniR/mern_thinkboard/issues/new?template=feature_request.md) using the provided template. Describe:

- The problem your feature would solve
- Your proposed solution
- Any alternatives you've considered

### Guidelines

- Follow the existing code style (camelCase naming, ES module imports)
- Keep commits focused and atomic
- Reference related issues in your PR description

---

## 📄 License

This project is licensed under the **ISC License** — see the [package.json](./backend/package.json) for details.

---

<div align="center">

**Built with ❤️ by [SirGhaniR](https://github.com/SirGhaniR) and [contributors](https://github.com/SirGhaniR/mern_thinkboard/graphs/contributors)**

⭐ Star this repo if you find it helpful!

</div>


