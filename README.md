<div align="center">

# 🎬 Movie API

**A robust, scalable, and fully type-safe RESTful API for managing your movie collections.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)](https://mochajs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

_Built with modern architecture, engineered for performance._

---

</div>

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Testing](#-testing)

---

## 🎯 Overview

**Movie API** is a complete backend service designed to handle a movie library's CRUD (Create, Read, Update, Delete) operations. It seamlessly leverages the power of MongoDB coupled with Mongoose ORM for intelligent schema validation, all wrapped entirely in strict TypeScript for bulletproof confidence on both compilation and runtime levels.

---

## ✨ Key Features

- **🛡️ 100% Type-Safe**: Fully migrated to strong TypeScript data structures mapping over the database layer.
- **🚀 Ultra Fast**: Built strictly with performant, non-blocking asynchronous hooks.
- **📁 MVC Architecture**: Clean code structure cleanly separating Models, Views (Routes), and Controllers.
- **🧪 Reliable Testing**: Test-driven implementations mocked extensively through `proxyquire` and `Mocha`.
- **🌐 Ready to Integrate**: Standardized HTTP responses and native `cors` integration to talk with any frontend.

---

## 🏗️ Architecture & Tech Stack

The service takes advantage of an enterprise-level modularized backend stack.

| Technology             | Purpose                                                    |
| ---------------------- | :--------------------------------------------------------- |
| **Node.js + Express**  | High-performance core HTTP Server                          |
| **TypeScript**         | Advanced static type checking & compiling                  |
| **MongoDB + Mongoose** | NoSQL Database handling with structural schema validations |
| **Mocha + Supertest**  | Automated end-to-end routing testing                       |

---

## 📡 API Reference

The base URL for all endpoints is `/api/movies`.

### Core Movie Endpoints

|  Method  | Endpoint    | Description                             | HTTP Status Return |
| :------: | :---------- | :-------------------------------------- | :----------------: |
|  `GET`   | `/`         | Retrieve all movies in the database     |      `200 OK`      |
|  `GET`   | `/:movieId` | Fetch detail for a specific movie by ID |      `200 OK`      |
|  `POST`  | `/`         | Create a new movie entry                |   `201 Created`    |
|  `PUT`   | `/:movieId` | Modify an existing movie                |      `200 OK`      |
| `DELETE` | `/:movieId` | Delete a movie permanently              |      `200 OK`      |

<details>
<summary><b>💡 View Request/Response Payload Example</b></summary>
<br>

**Request Body (`POST /api/movies`)**:

```json
{
	"title": "Crime at Porta Romana",
	"year": "1999",
	"cover": "http://example.com/cover.jpg",
	"duration": "237",
	"contentRating": "C",
	"tags": ["Adventure", "Comedy"]
}
```

**Successful Response Format**:

```json
{
	"data": "ca309ed7-1aeb-4201-b2a4-2386dba194f0",
	"message": "Movie created successfully!"
}
```

</details>

---

## 🚀 Getting Started

Follow these steps to deploy a developmental environment locally.

### Prerequisites

You need [Node.js](https://nodejs.org/) (v16+) and [pnpm](https://pnpm.io/) package manager runtime.

<details>
<summary><b>⚙️ Installation & Setup Commands</b></summary>

**1. Clone & Install Dependencies:**

```bash
# Clone the repository
git clone https://github.com/jorgeadev/movie-api

# Jump to the project directory
cd movie-api

# Install required packages
pnpm install
```

**2. Configure your Environment Variables**
Generate a `.env` file at the root of your project:

```ini
PORT=3000
DB=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/movies?retryWrites=true&w=majority
```

**3. Boot the Server!**
Run the typescript-node developer service directly with Hot-Reloads:

```bash
pnpm dev
```

</details>

---

## 🧪 Testing

The codebase includes full mock-powered routing tests avoiding actual MongoDB mutations.

To execute the test suite:

```bash
pnpm test
```

> **Note:** Tests compile safely through `ts-node/register` handling standard CommonJS proxy wiring environments perfectly.

---

<div align="center">
  <i>If you found this useful, please leave a star ⭐ on the repository!</i>
</div>
