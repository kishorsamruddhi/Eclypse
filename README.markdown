# Eclypse E-Commerce Website

Eclypse is a fully functional e-commerce website built from scratch, offering a seamless shopping experience. Users can browse products, manage their cart, and proceed to checkout. The project utilizes a modern tech stack to ensure performance, scalability, and responsive design. Both the frontend and backend are deployed and live for public access.

---

## 🚀 Live Demo

Explore the website here:  
https://eclypse-ecommerce.vercel.app/

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

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Installation

#### Clone the Repository

```bash
git clone https://github.com/Aadarsh-2912/Eclypse-Ecommerce.git
cd eclypse-ecommerce
```

#### Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
```

Start the server:

```bash
npm run start
```

Server will run at: `http://localhost:5000`

#### Set Up the Frontend

```bash
cd client
npm install
npm run start
```

Frontend will be available at: `http://localhost:3000`

> **Note:** Make sure the backend server is running to enable API data fetching.

---

## 📡 API Endpoints

- `GET /api/products` – Retrieve all products
- `GET /api/addresses` – Get saved addresses (for Checkout)
- `POST /api/addresses` – Submit a new address

---

## 🌐 Deployment

### Frontend
- **Host**: Vercel
- **Live URL**: https://eclypse-ecommerce.vercel.app/
- **CI/CD**: Pushes to `main` branch trigger redeployments

### Backend
- **Host**: Render
- **Live URL**: https://eclypse-ecommerce.onrender.com
- **Environment Variables**: Configured via Render dashboard (e.g., `MONGODB_URI`)
- **CI/CD**: Auto-deployment on push to `main`

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.

---

## 📬 Contact

- **GitHub:** [Aadarsh-2912](https://github.com/Aadarsh-2912)
- **Email:** aadarshanand2912@gmail.com
