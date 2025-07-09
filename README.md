# Skibookers

A modern, desktop-first web app for reviewing and customizing your recommended ski trip. Built with **React**, **Vite**, **TypeScript**, **Zustand**, and **SCSS Modules** for a beautiful, maintainable, and scalable experience.

---

## 🚀 Quick Start

### Prerequisites

- [pnpm](https://pnpm.io/) (recommended)
- Node.js 18+

### Setup & Run

```sh
pnpm install
pnpm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```sh
pnpm build
```

---

## 🗂️ Project Structure

```
src/
  components/      # Reusable UI (Card, Button, Modal, EditModal, etc.)
  pages/           # Main pages (TripReview, Checkout)
  constants/       # Mock data, options, icons, card configs
  hooks/           # Custom hooks (Zustand store, notifications)
  utils/           # Utility functions (price calculation)
  App.tsx          # App entry, routes, suspense
  App.scss         # Global variables & theme
  main.tsx         # ReactDOM entry
```

### Key Components

- **Card, Button, Modal, Spinner**: Modular, accessible, and styleable.
- **EditModal**: Edit trip options with AI suggestions and price deltas.
- **NotificationAlert**: Modern feedback system for user actions.
- **TripPackageSection**: Renders all trip cards from a single config array.
- **RecommendationSection**: Beautiful, interactive recommendations with icons and CTAs.

---

## 🏔️ How It Works

- **TripReview Page**: See your recommended trip, edit any section, and get instant feedback.
- **EditModal**: Edit options with AI suggestions and see price changes before saving.
- **Checkout Page**: Review your full trip and price, with a clear, modern summary card.
- **Recommendations**: Get personalized suggestions based on your preferences.

---

## 🛠️ Tech Stack

- **React 19** + **Vite 7**
- **TypeScript 5**
- **Zustand** (state management)
- **SCSS Modules** (modular styles)
- **classnames** (dynamic class composition)
- **ESLint + Prettier** (code quality)

---

## 📦 Extending & Customizing

- Add new trip options or cards by editing `src/constants/tripCards.ts` and `mockOptions.ts`.
- Update mock data in `src/constants/mockData.ts`.
- Add new UI components in `src/components/`.
- Theme or extend variables in `src/App.scss`.

---

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests.

### Running Tests

```sh
pnpm vitest run
```

Or for watch mode:

```sh
pnpm vitest
```

- Tests are located alongside components (e.g., `src/components/Card/index.test.tsx`).
- Includes tests for Card, Modal, and OptionList components.
- Uses jest-dom matchers for better assertions.

---

## 🤝 Contributing

PRs and suggestions welcome! Please lint and format your code before submitting.

---

## License

MIT
# Skibookers
