# Binaire Web Store UI Assessment

A Steam-inspired web store interface recreated as part of the **Binaire Private Limited JavaScript Developer Technical Assessment**.

The project is built using **ReactJS, JavaScript, Tailwind CSS and Vite**, with a focus on recreating the provided Steam Store UI, interactions, animations and multiple store pages.

---

## 🚀 Live Demo

https://binaire-freznel-ai-assessment-ten.vercel.app/

---

## 📂 GitHub Repository

https://github.com/Ayushman-123-hash/Binaire-FreznelAI-Assessment

---

## ✨ Features

- Steam-inspired dark store UI
- Responsive layout
- Reusable Header and Footer components
- Multiple store pages
- Game/product cards
- Featured game sections
- New Releases page
- Age Verification page
- Signup page
- Interactive navigation
- Hover, active and focus states
- CSS animations and transitions
- Custom scrollbar styling
- Lazy-loading implementation
- TMDB API service structure
- Firebase Authentication integration
- SPA routing
- Vercel deployment

---

## 📄 Pages

### 1. Store Home

The main Steam-inspired store homepage includes:

- Store navigation
- Hero section
- Featured games
- Discount sections
- Discovery sections
- Featured tags
- Store game tabs
- Browse deals
- Game cards

URL:

```text
https://binaire-freznel-ai-assessment-ten.vercel.app/
```

---

### 2. Age Check

A Cyberpunk 2077-inspired age verification page containing:

- Game artwork
- Date of birth selection
- View Page button
- Cancel button
- Age verification information

URL:

```text
https://binaire-freznel-ai-assessment-ten.vercel.app/agecheck/app/1091500/
```

---

### 3. New Releases

The New Releases page includes:

- Breadcrumb navigation
- New Releases heading
- Featured release cards
- New Top Sellers section
- Popular releases
- Game cards
- Pricing information

URL:

```text
https://binaire-freznel-ai-assessment-ten.vercel.app/explore/new/
```

---

### 4. Signup

A Firebase Authentication based account creation interface.

URL:

```text
https://binaire-freznel-ai-assessment-ten.vercel.app/signup
```

---

## 🛠️ Tech Stack

- ReactJS
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- Firebase Authentication
- TMDB API
- HTML5
- CSS3
- Vercel

---

## 📁 Project Structure

```text
Binaire-FreznelAI-Assessment/
│
├── public/
│
├── src/
│   ├── auth/
│   │   └── Signup.jsx
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── Store/
│   │       ├── PopularNewReleases.jsx
│   │       ├── SectionTitle.jsx
│   │       ├── StoreBrowseDeals.jsx
│   │       ├── StoreGameTabs.jsx
│   │       ├── TMDBMovies.jsx
│   │       └── ...
│   │
│   ├── data/
│   │   └── games.js
│   │
│   ├── pages/
│   │   ├── StoreHome.jsx
│   │   ├── StoreAgeCheck.jsx
│   │   └── StoreNewReleases.jsx
│   │
│   ├── services/
│   │   ├── TMDBService.js
│   │   └── tmdb.js
│   │
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
│
├── public/
├── .env
├── firebase.json
├── firestore.rules
├── vercel.json
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Ayushman-123-hash/Binaire-FreznelAI-Assessment.git
```

Move into the project directory:

```bash
cd Binaire-FreznelAI-Assessment
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

Do not commit your local environment file containing actual configuration values.

Vite exposes variables prefixed with `VITE_` through `import.meta.env`, so these values are intended for client-side use and should not contain server-only secrets. :chatgpt-content-reference{index="0"}

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

The application is deployed using **Vercel**.

The project is connected to the GitHub repository and can be redeployed after pushing changes.

```bash
git add .
git commit -m "Update project"
git push
```

---

## 🎨 UI & Interactions

The application includes:

- Hover states
- Active states
- Focus states
- Focus-visible states
- Focus-within states
- Target states
- Button transitions
- Card hover effects
- Page entrance animations
- Responsive layouts
- Custom scrollbar styling

CSS keyframes and transitions are used for animations and UI interactions.

---

## 🔌 API Integration

### TMDB API

The project contains a dedicated TMDB service for retrieving dynamic movie content and generating TMDB image URLs.

The service is implemented through:

```text
src/services/TMDBService.js
```

---

## 🔥 Firebase Authentication

Firebase Authentication is used for the account creation flow.

The Firebase configuration is loaded through environment variables and the Firebase modular JavaScript SDK.

---

## 📱 Responsive Design

The UI is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile-sized screens

Tailwind CSS utility classes are used for responsive layouts and styling.

---

## 📌 Assessment

This project was developed for the:

**Binaire Private Limited — JavaScript Developer Technical Assessment**

The implementation focuses on recreating the provided Steam-inspired Web Store UI and implementing the requested frontend functionality.

---

## 👨‍💻 Developer

**Ayushman Thakur**

GitHub:

https://github.com/Ayushman-123-hash

---

## 📜 License

This project was created for assessment and educational purposes.