import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm, { Address } from "../components/AddressForm";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
  };

  return (
    <section className="flex flex-col md:flex-row items-start p-8 gap-8 bg-white min-h-screen">
      {/* Left - Address Section */}
      <div className="flex-1">
        {/* Header with back button */}
        <div
          className="flex items-center mb-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl mr-2 text-black">&lt;</span>
          <h3 className="text-xl font-semibold text-gray-800">
            Shipping Address
          </h3>
        </div>

        <AddressForm onAddressSelect={handleAddressSelect} />
      </div>

      {/* Right - Order Info */}
      <div className="flex-1 self-start bg-white mt-8 border border-gray-300 rounded-lg p-6 md:p-12">
        <p className="text-black text-lg md:text-xl mb-6 md:mb-8">
          By placing your order, you agree to our company Privacy policy and
          Conditions of use.
        </p>
        <hr className="border-gray-300 mb-6 md:mb-8" />
        <h3 className="text-black text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Order Summary
        </h3>
        <div className="text-black mb-4 space-y-2 md:space-y-3 text-lg md:text-xl">
          <div className="flex justify-between">
            <span>Items - Silhouette No. 1 - Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between">
            <span>Before tax :</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>
        </div>
        <hr className="border-gray-300 mb-6 md:mb-8" />
        <div className="flex justify-between text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          <span>Order Total</span>
          <span>₹ 7,999</span>
        </div>
        <button
          className="w-full bg-black text-white py-3 md:py-4 rounded-lg text-lg md:text-xl"
          disabled={!selectedAddress}
          onClick={() => {
            alert(
              `Order placed for: ${selectedAddress?.firstName} ${selectedAddress?.lastName}, ${selectedAddress?.street}`
            );
          }}
        >
          Place Order
        </button>
      </div>
    </section>
  );
};

export default Checkout;
