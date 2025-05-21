Eclypse E-Commerce Website
Eclypse is a fully functional e-commerce website built from scratch, featuring a seamless shopping experience for users to browse products, manage their cart, and proceed to checkout. The project is developed with a modern tech stack, ensuring scalability and performance, and is deployed live for public access.
Features

Demo
A live demo of the website is available at: 
https://eclypse-ecommerce.vercel.app/

Product Catalog Page: Browse a wide range of products fetched dynamically from the backend API. Products are displayed with details like name, price, and image.
Cart Page: Add products to a persistent cart (stored in localStorage), update quantities, remove items, and proceed to checkout seamlessly.
Event-Driven Updates: The cart updates in real-time across pages using event-driven mechanisms, ensuring a consistent user experience.
Dynamic Reloading: The cart stays in sync across different pages with dynamic reloading, preventing data loss during navigation.
Checkout Page: A user-friendly checkout page to input address details and proceed to payment (mocked for now).
Responsive Design: The website is fully responsive, providing an optimal experience on both desktop and mobile devices.
Deployment: The frontend is hosted on Vercel, and the backend is hosted on Render, with automated deployment pipelines for seamless updates.

Tech Stack

Frontend:
React: For building the user interface.
Tailwind CSS: For styling and responsive design.
Axios: For making API requests to the backend.
React Router: For client-side routing (if applicable).
LocalStorage: For persistent cart storage.


Backend:
Node.js: Runtime environment.
Express: For building the REST API.
MongoDB: Database for storing product and address data (assumed based on context).


Deployment:
Vercel: Hosting the frontend.
Render: Hosting the backend.


Other Tools:
GitHub Actions or Vercel/Render Pipelines: For automated deployment.


Setup Instructions
Prerequisites

Node.js (v16 or higher)
npm or yarn
MongoDB (local or cloud instance, e.g., MongoDB Atlas)

Installation

Clone the Repository:
git clone https://github.com/your-username/eclypse-ecommerce.git
cd eclypse-ecommerce


Set Up the Backend:
cd server
npm install


Create a .env file in the server/ directory with the following:PORT=5000
MONGODB_URI=your-mongodb-connection-string


Start the backend server:npm run start

The backend will run on http://localhost:5000.


Set Up the Frontend:
cd client
npm install


Start the frontend development server:npm run start

The frontend will run on http://localhost:3000.


Access the Website:

Open http://localhost:3000 in your browser to view the website.
Ensure the backend is running to fetch product data and save addresses.



API Endpoints
The backend exposes the following API endpoints:

GET /api/products: Fetch all products for the Product Catalog.
GET /api/addresses: Fetch saved addresses for the Checkout page.
POST /api/addresses: Save a new address during checkout.

Deployment
The website is deployed live with the following setup:

Frontend: Hosted on Vercel.
URL: https://your-frontend-url.vercel.app (replace with your actual URL).
Automated deployment pipeline: Pushes to the main branch trigger a new deployment on Vercel.


Backend: Hosted on Render.
URL: https://your-backend-url.onrender.com (replace with your actual URL).
Environment variables are set in Render’s dashboard (e.g., MONGODB_URI).
Automated deployment pipeline: Pushes to the main branch trigger a new deployment on Render.



Screenshots
(Add screenshots of your website here, e.g., Product Catalog, Cart, and Checkout pages. You can upload images to the repo and link them here.)

Product Catalog Page:
Cart Page:
Checkout Page:


Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a Pull Request.

Please ensure your code follows the project’s coding style and includes appropriate tests.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, feel free to reach out:

GitHub: your-username
Email: your-email@example.com

