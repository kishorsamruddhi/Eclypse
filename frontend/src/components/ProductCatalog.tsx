import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity?: number;
};

const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("CartPage") || "[]");

    const existingItemIndex = cart.findIndex((item: Product) => item._id === product._id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  const buyNow = (product: Product) => {
    localStorage.setItem("Cart", JSON.stringify([{ ...product, quantity: 1 }]));
    navigate("/checkout");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">PRODUCT CATALOG</h2>

      {products.length === 0 ? (
        <p className="text-white text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow bg-white text-black transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-84 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-semibold mb-4">₹ {product.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => buyNow(product)}
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
