# FILTER COFFEE ☕✨

A React-based project that allows users to **multi-filter** a set of data.

This project provides a user-friendly interface for filtering a dataset of coffees based various criteria. The application is built using **React**, **TypeScript**, and **Vite**.

&nbsp;

![Preview](https://res.cloudinary.com/dyrcsywk9/image/upload/v1726687050/multi-filtering-tablet.webp)

&nbsp;

## 📋 Features

- Filter coffee data by `Roasts`, `Types`, `Flavors`, and `Categories`.
- Display available filters.
- Display active filters.
- Move filters from available to active when clicked and vice versa.
- Option to clear active filters.

## 🗂️ Project Structure

```bash
src/
src/
├── App.tsx
├── main.tsx
├── components
│   └── filter
│       ├── Filter.tsx
│       ├── FilterPanels
│       │   ├── ActiveFilters.tsx
│       │   └── AvailableFilters.tsx
│       ├── FilterResults
│       │   └── FilterResults.tsx
│       └── filter.css
├── styles
│   ├── app.css
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
