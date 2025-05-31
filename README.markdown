# Eclypse E-Commerce Website

This is a fully functional e-commerce website built from scratch, offering a seamless shopping experience. Users can browse products, manage their cart, and proceed to checkout. The project utilizes a modern tech stack to ensure performance, scalability, and responsive design. Both the frontend and backend are deployed and live for public access.

---

## 🚀 Live Demo

Explore the website here:  
[https://eclypse-ecommerce.vercel.app/](https://eclypse-ecommerce-kishorsamruddhi-samruddhis-projects-443f0d6e.vercel.app/)

---

## ✅ Features

- **Product Catalog Page**: Browse a wide range of products fetched dynamically from the backend API. Each product includes details like name, price, and image.
- **Cart Page**: Add products to a persistent cart stored in `localStorage`, update quantities, remove items, and proceed to checkout.
- **Event-Driven Updates**: Real-time cart updates across pages for a consistent experience.
- **Dynamic Reloading**: The cart state stays in sync across different pages, even after navigation or refresh.
- **Checkout Page**: Enter address details and proceed to payment (currently mocked).
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## 🛠 Tech Stack

### Frontend
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Axios** – HTTP client for API calls
- **React Router** – Client-side routing (if used)
- **LocalStorage** – Persistent cart storage

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for RESTful APIs
- **MongoDB** – NoSQL database for product and address data

### Deployment
- **Vercel** – Frontend hosting
- **Render** – Backend hosting
- **CI/CD** – Automated deployments using GitHub integration

---

## 📁 Project Structure

```
eclypse-ecommerce/
├── client/                  # Frontend (React)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── assets/          # Images and other static assets
│   │   ├── App.jsx          # Main App component
│   │   └── index.jsx        # React entry point
├── server/                  # Backend (Node.js/Express)
│   ├── routes/              # API route definitions
│   ├── models/              # Mongoose models
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Custom middleware (if any)
│   └── server.js            # Entry point for Express server
├── README.md                # Project documentation
└── package.json             # Root dependencies and scripts
```
