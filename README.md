# Project Overview

This project is a modern web application structured using React and Next.js. It employs a modular component architecture, with a focus on maintainability, scalability, and localization support.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Testing](#testing)
- [Tech Stack](#tech-stack)

## Features

- **Component-Based Design**: Organized into atoms, molecules, and organisms for modular development.
- **Localization**: Includes support for multiple languages (e.g., English, Japanese).
- **Testing**: Configured with Jest and supports snapshot testing.
- **Styling**: Tailwind CSS for efficient and scalable styling.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Run the development server:
   ```bash
   yarn dev
   ```

## Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the application for production.
- `yarn test`: Run the test suite.
- `yarn lint`: Run linting.

## Testing

The project uses Jest for unit and snapshot testing. Test files are located in the `__tests__` directory. Run tests with:

```bash
yarn test
```

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest
- **Package Manager**: Yarn
- **Node.js Version**: ^21.1.0
