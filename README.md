# Kitchen App

A full-stack application for discovering kitchen designs and inspiration, built with Node.js (backend) and Next.js (frontend), both using TypeScript.

<!-- Note: This app was originally built as a techno events app, but has been refactored to focus on kitchen designs. Techno-related code has been commented out for future reference. -->

## Project Structure

```
techno-app/
├── backend/          # Node.js + Express + TypeScript API
├── frontend/         # Next.js + TypeScript frontend
└── package.json      # Root package.json for monorepo
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install root dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd backend && npm install
```

3. Install frontend dependencies:
```bash
cd frontend && npm install
```

### Development

Run both frontend and backend in development mode:
```bash
npm run dev
```

Or run them separately:
```bash
# Backend only (runs on http://localhost:3001)
npm run dev:backend

# Frontend only (runs on http://localhost:3000)
npm run dev:frontend
```

### Building

Build both projects:
```bash
npm run build
```

Or build separately:
```bash
npm run build:backend
npm run build:frontend
```

## Features

- 🏠 Browse kitchen design gallery
- 🎨 View animated kitchen showcases
- 📸 Explore different kitchen styles
- 💡 Get design inspiration and ideas
- 📝 Contact form with validation

## Tech Stack

**Backend:**
- Node.js
- Express
- TypeScript

**Frontend:**
- Next.js
- TypeScript
- React
