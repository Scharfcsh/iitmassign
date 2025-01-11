# Vite Project

This repository contains a Vite-based frontend project. The backend for this project is already deployed, so you can focus on running the frontend locally.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Backend API](#backend-api)

## Installation
Note: Just setup the frontend, the backend is deployed in the VM and it endpoint are available!!
---
Follow these steps to clone and set up the project locally:



1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd <repository-folder>
   ```


## Running the Project

1. **Start the development server**
   Using npm:
   ```bash
   npm run dev
   ```
   Or using yarn:
   ```bash
   yarn dev
   ```

2. **Access the application**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Backend API

The backend for this project is deployed and accessible at:
```
https://52.172.154.181:433 
http://52.172.154.181:3000
```

Make sure the frontend is configured to use the correct backend URL. This is set in the target in vite.config file ( `vite.config.js`). For example:

If you need to update this URL, modify the `vite.config.js` file in the root directory of the project.

**The backend code is Provided for further review!!

---

Feel free to raise an issue if you encounter any problems or have questions about the setup.
