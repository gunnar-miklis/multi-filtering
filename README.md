# FILTER COFFEE ☕✨

This small application lets users filter a dataset of fictional (AI-generated) coffees based on various criteria.

It's part of my practice projects. The main learning goals are:

- Get familiar with advance filtering techniques, handle multiple filters effectively and update the URL (search params).
- React: Enhance my knowledge (complex state management, custom hooks, separation of concerns, MVVM).
- TypeScript: Handle more complex types.
- CSS conventions: Learn and follow BEM methodology for clean and reusable styles.

&nbsp;

![Preview](https://res.cloudinary.com/dyrcsywk9/image/upload/v1726687050/multi-filtering-tablet.webp)

&nbsp;

## 📋 Features

- **Dynamically Multiple Filtering**: Use multiple filters to filter a dataset by different categories.
- **Filter Status Managment**: See which filters are "available" and which are currently "active".
- **Interactive Filter Selection**: Click to move filters between "available" and "active" lists.
- **Adaptive Remaining Filters**: Available filters show only those options that the user can still choose from.
- **URL Sync**: Active filters are reflected in the browser URL. Simply share the current filter combination, or paste a URL to revisit a specific set of filters.
- **Reset Filters**: Clear all active filters and reset the URL to start over.

## 🗂️ Project Structure

```bash
src/
├── main.tsx
├── App.tsx
├── app.css
├── components
│   └── filter
│       ├── FilterPanel
│       │   ├── ActiveFilters.tsx
│       │   ├── AvailableFilters.tsx
│       │   ├── FilterPanel.tsx
│       │   └── filter-panel.css
│       └── FilterResults
│           ├── FilterResults.tsx
│           └── filter-results.css
├── hooks
│   └── useFilter.tsx
├── data
│   └── coffee-data.ts
├── utils
│   └── functions.ts
├── types
│   └── index.ts
└── styles
    ├── main.css
    ├── reset.css
    ├── utils.css
    └── variables.css
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
