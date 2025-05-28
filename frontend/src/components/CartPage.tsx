import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Silhouette No. 1", color: "Vermilion", price: 7999, quantity: 1 },
  ]);

  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncreaseQuantity = (id: number): void => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number): void => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number): void => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <section className="flex flex-col lg:flex-row items-start p-4 md:p-8 gap-6 bg-white min-h-screen">
      <div className="w-full lg:flex-1">
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl mr-2 text-black">&lt;</span>
          <h3 className="text-xl font-semibold text-gray-800">Your Cart</h3>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between sm:items-center border border-gray-300 rounded-lg p-4"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.name} - {item.color}
                  </h4>
                  <p className="text-lg text-gray-600">₹ {item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="text-black text-lg px-2"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-lg">{item.quantity}</span>
                    <button
                      className="text-black text-lg px-2"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="text-red-500 text-lg mt-4 sm:mt-0"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full lg:flex-1 bg-white border border-gray-300 rounded-lg p-6 md:p-12 mt-8 lg:mt-0">
        <h3 className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Cart Summary
        </h3>
        <div className="text-black mb-4 space-y-2 md:space-y-3 text-base md:text-xl">
          <div className="flex justify-between">
            <span>Subtotal ({cartItems.length} items):</span>
            <span>₹ {calculateTotal()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee:</span>
            <span>₹ 200</span>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 md:mb-8" />
        <div className="flex justify-between text-xl md:text-3xl font-bold mb-6 md:mb-8">
          <span>Total</span>
          <span>₹ {calculateTotal() + 200}</span>
        </div>
        <button
          className="w-full bg-black text-white py-3 md:py-4 rounded-lg text-base md:text-xl disabled:bg-gray-400"
          disabled={cartItems.length === 0}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default CartPage;
