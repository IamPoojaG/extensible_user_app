# React Extensible CRUD User Management App

A production-ready React + Vite + TypeScript CRUD application with a schema-driven dynamic form system.  
The application is designed for easy extensibility, clean architecture, and maintainable code.

---

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- JSON Server (Mock API)
- REST API Integration
- Schema Driven Form Architecture

---

## Features

- Create User
- View Users List
- Update User Details
- Delete User
- Dynamic Form Rendering
- Field Level Validation
- API Error Handling
- Loading States
- Extensible Field Architecture

---

## Installation & Setup

### Step 1 — Install Dependencies

bash
npm install

### Step 2 Environment Setup

Create a file in project root:

.env

add : VITE_API_BASE_URL=http://localhost:5000

### Step 3 Start Mock Backend Server

npx json-server --watch db.json --port 3001

### Step 4 Start Frontend Application

npm run dev

## Application URL

http://localhost:5173

## Mock Database Example (db.json)

{
"users": [
{
"id": 1,
"firstName": "Pooja",
"lastName": "Sharma",
"phone": "9876543210",
"email": "pooja@email.com"
}
]
}

## Extensible Form Architecture

The form is fully schema driven.

All form fields are controlled from:

src/config/userForm.schema.ts

## Adding New Fields Example

Add Date Of Birth Field

{
name: "dob",
label: "Date Of Birth",
type: "date",
required: true
}

## API Contract

Expected REST Endpoints:

GET /users
POST /users
PUT /users/:id
DELETE /users/:id

## Deploy To

Vercel

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
