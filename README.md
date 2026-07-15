# Al-Xorazmiy School Website

A modern, high-performance, and responsive landing page for the **Al-Xorazmiy Specialized School**, featuring multilingual support, rich animations, and clean aesthetics.

Developed by **Axmadjon Yodgorov**.

---

## 🚀 Technologies & Libraries Used

This project is built using modern web development standards and a premium tech stack:

- **Core**: React 18 (TypeScript) & Vite
- **Styling**: Tailwind CSS
- **Components & UI**: Radix UI primitives & shadcn/ui components
- **Navigation**: React Router DOM (v6)
- **State Management & Data Fetching**: TanStack React Query (v5)
- **Icons**: Lucide React
- **Animations**: Custom scroll-driven velocity and animation transitions
- **Localization**: Custom lightweight Language Context supporting:
  - 🇺🇿 O'zbekcha (Uzbek)
  - 🇷🇺 Русский (Russian)
  - 🇬🇧 English

---

## 🛠️ Project Structure

The project has been organized and cleaned to remove any unused assets, components, or layout templates:

```
├── public/
│   ├── lovable-uploads/   # Cleaned optimized assets (logos, images)
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/
│   │   ├── ui/            # Cleaned & minimal UI components (button, card, tooltip, dropdown, sonner/toast)
│   │   ├── About.tsx      # School philosophy & history section
│   │   ├── ClickSpark.tsx # Premium interactive cursor spark effect
│   │   ├── Contact.tsx    # Connection links (Telegram, Phone, Map)
│   │   ├── Footer.tsx     # Site footer with maps & contact details
│   │   ├── Header.tsx     # Sticky navigation bar with language picker
│   │   ├── Hero.tsx       # Welcoming header section with dynamic overlay
│   │   ├── News.tsx       # Dynamic school events and news section
│   │   ├── Programs.tsx   # Curriculum and specialization programs
│   │   ├── ScrollVelocity.# Kinetic text running marquee effect
│   │   └── Stats.tsx      # Achievement statistics
│   ├── contexts/
│   │   └── LanguageContext.tsx # Centralized state for internationalization
│   ├── hooks/             # Utility hooks (use-mobile, use-toast)
│   ├── pages/             # Page components (Index page, 404 page)
│   ├── lib/               # Utility helper functions
│   ├── App.tsx            # Main root router & layout provider
│   └── main.tsx           # Entry point
```

---

## ⚙️ Development and Installation Guide

### Prerequisites
- Node.js (version 18 or above recommended)
- npm (Node Package Manager)

### Step 1: Install Dependencies
```sh
npm install
```

### Step 2: Start Development Server
```sh
npm run dev
```
Open `http://localhost:5173` in your browser.

### Step 3: Production Build
Compile and bundle the website for production:
```sh
npm run build
```
The optimized output will be generated inside the `dist` directory.

### Step 4: Preview Build
Preview the production build locally:
```sh
npm run preview
```

---

## 📄 Related Documentation
- [CONTRIBUTING.md](file:///Users/ahmetyadgarov/Desktop/alxorazmiy-website/CONTRIBUTING.md) — Contribution guidelines and coding conventions.
- [CHANGELOG.md](file:///Users/ahmetyadgarov/Desktop/alxorazmiy-website/CHANGELOG.md) — Release notes and updates log.
