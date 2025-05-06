# Quiz Tournament Frontend

This is the frontend application for the Quiz Tournament platform.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. The frontend will be available at http://localhost:3000

## Features

- User authentication with email/password and Google
- Browse and join tournaments
- Take part in timed quiz competitions
- View leaderboards and winners
- Wallet management for entry fees and winnings
- Profile management
- Admin dashboard for tournament and quiz management

## Pages

- Home: Landing page showing live and upcoming tournaments
- Auth: Combined login and registration page
- Tournament details: Information about a specific tournament
- Quiz: Interface for taking quizzes
- Leaderboard: Rankings for tournaments
- Profile: User profile management
- Wallet: Manage tournament entry fees and winnings
- Admin pages: Tournament and quiz management for admins

## Deployment

To build for production:

```
npm run build
```

This will create a `dist` directory with the compiled assets.

You can deploy this to any static hosting service like Netlify, Vercel, or GitHub Pages.

Remember to update the `.env.production` file with your production API URL before building.
