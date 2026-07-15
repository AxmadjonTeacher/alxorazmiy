# Contributing to Al-Xorazmiy School Website

Thank you for your interest in contributing to the Al-Xorazmiy School Website! Please follow these guidelines to maintain codebase health, quality, and consistency.

Project Lead & Maintainer: **Axmadjon Yodgorov**

---

## 🛠️ Code Quality & Formatting Guidelines

To keep the project clean and uniform, we enforce the following guidelines:

### 1. Code Styling
- **TypeScript**: The project is strictly typed. Avoid using `any` types; prefer declaring robust interfaces.
- **Component Design**: Organize React components as functional components using the arrow syntax (`const MyComponent = () => ...`).
- **Formatting**: Keep code styled according to ESLint guidelines. Run `npm run lint` before committing any changes.

### 2. Styling (CSS)
- Use **Tailwind CSS** utility classes for styling.
- Rely on defined theme variables inside `tailwind.config.ts` for border colors, shadows, and spacing.
- Keep interactive micro-interactions premium, utilizing hover scale effects (`hover:scale-105`), subtle transits (`transition-all duration-300`), and curated color palettes.

### 3. File and Resource Deletions
- Avoid adding unused dependencies to `package.json`.
- When adding new images or assets, place them in `public/lovable-uploads/` or a structured assets folder, and ensure old, unused images are cleaned up.

---

## 📈 Development Workflow

Follow this step-by-step workflow when submitting your contributions:

1. **Check Out a Branch**: Create a feature or fix branch from `main` (e.g., `git checkout -b feature/cool-new-animation`).
2. **Local Verification**:
   - Ensure the server runs smoothly: `npm run dev`.
   - Run type checks and validation: `npm run build`.
   - Make sure ESLint is clean: `npm run lint`.
3. **Commit & Push**: Commit your changes with descriptive messages and push them.
4. **Pull Request**: Open a pull request against the `main` branch. Provide detail on what changes were made, and why they were necessary.
