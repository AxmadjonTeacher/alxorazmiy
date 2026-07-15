# Changelog

All notable changes to this project will be documented in this file.

Developer: **Axmadjon Yodgorov**

---

## [1.0.1] - 2026-07-15

### Added
- Added `CONTRIBUTING.md` defining code standards, styling rules, and branching rules.
- Added `CHANGELOG.md` to trace the history and release updates of the project.

### Changed
- Rewrote `README.md` to document the codebase, features, architecture, and installation instructions.
- Modified `tailwind.config.ts` to use ES6 module imports (`import tailwindcssAnimate from "tailwindcss-animate"`) rather than CommonJS `require()`, fixing the ESLint compiler warning/error.

### Removed
- Removed 42 unused UI components in `src/components/ui/` to eliminate codebase bloat and fix several ESLint type errors.
- Removed unused custom component `src/components/Map.tsx`.
- Removed unused custom component `src/components/VariableProximity.tsx`.
- Removed 10 unused image assets from `public/lovable-uploads/` to optimize the repository size.
- Removed macOS system `.DS_Store` files from the root, `src/`, and `public/` directories.

---

## [1.0.0] - 2026-07-15

### Added
- Initial deployment of the Al-Xorazmiy Specialized School website.
- Implemented multilingual translation provider supporting Uzbek, Russian, and English.
- Created premium home landing page featuring sections for About, Hero, Programs, Stats, News, and Contact.
- Configured Radix UI elements styled with Tailwind CSS.
- Added dynamic interactive components including ClickSpark cursor effect and marquee velocity scroll.
