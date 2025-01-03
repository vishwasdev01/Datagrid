# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Datagrid Project

This project is a simple React datagrid application that allows users to select rows, view selected data, and download selected rows (only if all selected rows are available).

## Features

- **Select All**: A checkbox to select/deselect all rows.
- **Intermediate State**: Checkbox shows the intermediate state when only some rows are selected.
- **Green Status Dot**: Rows with "Available" status show a green dot.
- **Download Selected**: Only rows with the "Available" status can be downloaded.
- **Formatted Data Display**: On clicking the "Download Selected" button, an alert displays the selected rows' data in a formatted style.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (>= 16.x)
- npm (>= 7.x)
- Git

## Getting Started

Follow these steps to run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vishwasdev01/Datagrid.git

2. **Navigate to the project directory:**
cd Datagrid


3. **Install dependencies:**
 npm install

4. **Run the development server:**
npm run dev
