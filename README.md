# FILTER COFFEE ☕✨

This small interface allows users to **multi-filter** a dataset of Ai-generated fictional coffees, based various criteria. The application is built using **React**, **TypeScript**, and **Vite**.

It's part of my practice projects. Get familiar with advance filtering mechanism, handle multiple filters effectively, update the URL. Enhance my knowledge in React (state management), TypeScript (create and handle more complex types) and CSS (learn and follow BEM methodology for cleaner and reusable css).

&nbsp;

![Preview](https://res.cloudinary.com/dyrcsywk9/image/upload/v1726687050/multi-filtering-tablet.webp)

&nbsp;

## 📋 Features

- Dynamically filter a dataset by different categories.
- Display "available" and "active" filters.
- Move filters from "available" to "active" when clicked, and vice versa.
- Selected Filters are represented and updated in the browser URL as well.
- Filters in the App can be set by entering/pasting a specific URL, too.
- Option to clear and reset "active" filters (including clear URL).

## 🗂️ Project Structure

```bash
src/
├── main.tsx
├── App.tsx
├── app.css
├── components
│   └── filter
│       ├── Filter.tsx
│       ├── filter.css
│       ├── FilterPanel
│       │   ├── ActiveFilters.tsx
│       │   ├── AvailableFilters.tsx
│       │   └── filter-panel.css
│       └── FilterResults
│           ├── FilterResults.tsx
│           └── filter-results.css
├── styles
│   ├── main.css
│   ├── reset.css
│   ├── utils.css
│   └── variables.css
├── data
│   └── coffee-data.ts
└── utils
    └── functions.ts
```

## 🛠️ Technologies

- React
- TypeScript
- Vite

## 📦 Installation

- Clone the repository: `git clone https://github.com/gunnar-miklis/multi-filtering.git`.
- Install dependencies: `yarn` or `npm install`.

## 🖥️ Usage

- Start the development server: `yarn dev` or `npm run dev`.
- Open the application in your browser: `http://localhost:3000`.

### Scripts

- **dev**: Starts the development server using Vite.
- **tscw**: Starts the tsc watch mode for development.
- **lint**: Runs ESLint on the codebase.
- **format**: Formats the codebase using Prettier.
- **build**: Formats, lints and builds the application for production.

## 📜 License

This project is licensed under the MIT License.
