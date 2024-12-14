# Project Name

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Localization](#localization)
- [Scripts](#scripts)

---

## Overview

This is a modern web application built with **Next.js** and **TypeScript**. The project follows best practices for front-end development, including component-based architecture, Tailwind CSS for styling, and support for internationalization (i18n).

---

## Folder Structure

```
.
├── README.md
├── __tests__             # Test files
│   ├── __snapshots__    # Snapshot tests
│   ├── index.test.tsx   # Unit tests for index components
│   └── snapshot.tsx     # Snapshot testing file
├── app                   # Next.js app directory
│   └── [locale]         # Dynamic locale-based routes
│       ├── home         # Home page
│       │   └── page.tsx # Home page component
│       ├── layout.tsx   # Layout file
│       └── page.tsx     # Default page component
├── commitlint.config.js  # Commit linting configuration
├── components            # Reusable UI components
│   ├── atoms            # Small, single-purpose components
│   ├── molecules        # Composed components
│   └── organisms        # Complex components
├── eslint.config.mjs     # ESLint configuration
├── hooks                 # Custom React hooks
├── i18n                  # Internationalization utilities
│   ├── request.ts       # i18n request handling
│   └── routing.ts       # i18n routing logic
├── jest.config.js        # Jest configuration
├── jest.setup.js         # Jest setup file
├── messages              # Localization files
│   ├── en.json          # English translations
│   └── ja.json          # Japanese translations
├── middleware.ts         # Middleware logic
├── next-env.d.ts         # TypeScript environment types for Next.js
├── next.config.mjs       # Next.js configuration
├── package.json          # Project metadata and dependencies
├── postcss.config.js     # PostCSS configuration
├── public                # Static files
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── styles                # Global CSS
│   └── main.css
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── yarn-error.log        # Yarn error log
└── yarn.lock             # Dependency lockfile
```

---

## Features

- **Next.js App Router** with dynamic locale-based routing.
- **Component-based Architecture** using Atomic Design principles.
- **Internationalization (i18n)** with JSON files for translations.
- **Styling** using Tailwind CSS.
- **Testing** with Jest for unit and snapshot tests.

---

## Technologies Used

- **Next.js**
- **TypeScript**
- **Jest**
- **Tailwind CSS**
- **i18n**

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```

---

## Running the Project

To start the development server:

```bash
yarn dev
```

To build the project for production:

```bash
yarn build
```

To serve the production build:

```bash
yarn start
```

---

## Testing

To run tests:

```bash
yarn test
```

---

## Localization

Localization files are located in the `messages` folder. Add translations to `en.json` and `ja.json` (or other language files) as needed. The application dynamically serves translations based on the locale route.

---

## Scripts

Key scripts available in `package.json`:

- `yarn dev`: Start the development server
- `yarn build`: Build the project for production
- `yarn start`: Serve the production build
- `yarn test`: Run unit and snapshot tests
- `yarn lint`: Run linting checks
