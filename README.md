# React Routing & Firebase Authentication

Simple React app with React Router, Firebase email/password auth, and protected routes.

## Setup

1. Create a project at https://console.firebase.google.com
2. Authentication > Sign-in method > enable **Email/Password**
3. Project settings > add a **Web app** and copy the config values
4. Copy `.env.example` to `.env` and paste your values
5. Run:

```bash
npm install
npm run dev
```

## Routes

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |
