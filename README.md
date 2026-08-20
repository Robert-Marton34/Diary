# Diary

A full-stack personal diary app for writing, reading, and editing journal entries. Built as a monorepo with a Laravel API backend and a React/TypeScript frontend.

## Features

- Create new diary entries with a title and body
- Browse all past entries from the homepage
- View a single entry in full
- Edit an existing entry
- Light/dark theme toggle

## Tech Stack

**Backend (`/server`)**
- Laravel 12, PHP 8.2+
- SQLite database
- Laravel Sanctum (installed, not yet wired up for auth)

**Frontend (`/client`)**
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui-style components (Radix primitives + class-variance-authority)
- TanStack Query
- React Router v7

## Project Structure

```
diary/
├── server/           # Laravel API
│   ├── app/Http/Controllers/DiaryController.php
│   ├── app/Models/Diary.php
│   ├── database/migrations/
│   └── routes/api.php
└── client/           # React frontend
    └── src/
        ├── Home.tsx      # Entry list
        ├── Diary.tsx     # Single entry view
        ├── Entry.tsx     # New entry form
        ├── Edit.tsx      # Edit entry form
        └── components/ui # Shared UI components
```

## Getting Started

### Prerequisites

- PHP 8.2+ and Composer
- Node.js and npm

### 1. Set up the backend

```bash
cd server
composer install
cp .env.example .env
php artisan key:generate
touch database/diary.sqlite
php artisan migrate
php artisan serve
```

The API will run at `http://127.0.0.1:8000`.

### 2. Set up the frontend

In a separate terminal:

```bash
cd client
npm install
npm run dev
```

The app will run at `http://localhost:5173` (or whichever port Vite prints).

### 3. Open the app

Visit the URL Vite gives you in your browser. The homepage will fetch entries from the Laravel API — make sure both servers are running.

## API Endpoints

| Method | Endpoint              | Description          |
|--------|-----------------------|-----------------------|
| GET    | `/api/diaries`        | List all entries      |
| GET    | `/api/diaries/{id}`   | Get a single entry    |
| POST   | `/api/diaries`        | Create a new entry     |
| PUT    | `/api/diaries/{id}`   | Update an entry        |

## Known Limitations

- No authentication is enforced on the diary endpoints — anyone with API access can read/write entries
- Delete functionality is not yet implemented (no route or controller logic)
- The API base URL is hardcoded in the client rather than configured via an environment variable

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
