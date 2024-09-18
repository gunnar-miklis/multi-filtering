# FILTER COFFEE

> \_"Welcome to Filter Coffee, your go-to place for filtering coffee... data. This site offers

          a rich blend of filters that lets you grind through a variety of fictional coffees. Just
          like tweaking the ultimate brew, it's all about filtering data, pouring over it to reveal
          the subtle flavours or hidden notes. With Filter Coffee, you can brew your perfect blend
          of coffee, one filter at a time."_

## Overview

A React-based project that allows users to filter coffee data based on various criteria.

This project provides a user-friendly interface for **multi-filtering** coffee data based on `Roasts`, `Types`, `Flavors`, and `Categories`. The application is built using **React**, **TypeScript**, and **Vite**.

## Features

- Filter coffee data by `Roasts`, `Types`, `Flavors`, and `Categories`.
- Display available filters.
- Display active filters.
- Move filters from available to active when clicked and vice versa.
- Option to clear active filters.

## Project Structure

```bash
src/
├── App.tsx
├── main.tsx
├── components
│   └── filter
│       ├── ActiveFilters.tsx
│       ├── AvailableFilters.tsx
│       ├── Filter.tsx
│       ├── FilterResults.tsx
│       └── filter.css
├── data
│   └── coffee-data.ts
├── utils
│   └── functions.ts
└── styles
    ├── app.css
    └── main.css
```

## Dependencies

- React
- TypeScript
- Vite

## Scripts

- **dev**: Starts the development server using Vite.
- **tscw**: Starts the tsc watch mode for development.
- **lint**: Runs ESLint on the codebase.
- **format**: Formats the codebase using Prettier.
- **build**: Formats, lints and builds the application for production.

## Getting Started

- Clone the repository: git clone `https://github.com/gunnar-miklis/multi-filtering.git`.
- Install dependencies: `yarn install`.
- Start the development server: `yarn dev`.
- Open the application in your browser: `http://localhost:3000`.

## License

This project is licensed under the MIT License.
