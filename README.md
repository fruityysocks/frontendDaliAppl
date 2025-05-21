Front End for the Social Media App
This is the frontend repository for a social media app built for the DALI fullstack challenge. It features clean, expressive visuals inspired by the DALI aesthetic and is designed for a smooth, swipeable user experience. The frontend is built using React and Javascript, with global state managed by Zustand and styled using SCSS.

Designs
While we don’t have formal Figma mockups, the visual style takes inspiration from DALI’s branding and internal tools, featuring its signature color palette and interface patterns.

Screenshots


Architecture
Tech Stack
React v18

TypeScript

Vite

Zustand + Immer for global state management

React Query

React Router v6

Node Fetch

External Packages
axios – handles API communication (CRUD)

react-icons – provides a consistent icon set

react-router-dom – for route navigation

react-swipeable – enables swipe gestures (e.g. swipe left to go back)

Style
SCSS modules for scoped styling

ESLint configuration follows CS52's Airbnb-style React config

File Structure
csharp
Copy
Edit
.
├── public/
├── src/
│   ├── services/        # API calls
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components
│   ├── screens/         # Page components
│   ├── store/           # Zustand stores
│   ├── index.jsx        # App entry point
├── package.json
├── tsconfig.json
└── ...

Available Scripts
In the project directory, you can run:

npm install – Installs project dependencies

npm run dev – Starts the app in development mode
Open http://localhost:5173 to view it in your browser

npm run build – Builds the app for production

npm run lint – Lints all files using the ESLint config

Deployment
Live site: https://frontenddaliappl.onrender.com

To redeploy: Push to main on the GitHub repo, and Render will auto-deploy

Author
Prishita Dharampal ’28

Template credit to Rishav Chakravarty ’25
Based on the original DALI CRUD Template by Eric Lu ’25, Adam McQuilkin ’22, Thomas Monfre ’21, and Tyler Vergho ’23