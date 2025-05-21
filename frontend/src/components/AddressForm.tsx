import React, { useState, useEffect } from "react";

export interface Address {
  _id?: string;
  firstName: string;
  lastName: string;
  street: string;
  apt: string;
  state: string;
  zip: string;
}

interface AddressFormProps {
  onAddressSelect: (address: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAddressSelect }) => {
  const [formType, setFormType] = useState<"new" | "saved">("new");
  const [formData, setFormData] = useState<Address>({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: "",
  });

  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch saved addresses on component mount
  useEffect(() => {
    fetchSavedAddresses();
  }, []);

  const fetchSavedAddresses = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://eclypse-ecommerce.onrender.com/api/addresses");
      const data = await res.json();
      setSavedAddresses(data);
    } catch (err) {
      console.error("Failed to fetch saved addresses", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = async () => {
    try {
      const res = await fetch("https://eclypse-ecommerce.onrender.com/api/addresses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const newAddress = await res.json();
        setSavedAddresses((prev) => [...prev, newAddress]);
        setFormType("saved");
        onAddressSelect(newAddress);
        setFormData(newAddress);
      } else {
        console.error("Failed to save address");
      }
    } catch (err) {
      console.error("Error saving address", err);
    }
  };

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-4">
        <button
          className={`flex-1 py-2 rounded-lg text-sm border ${
            formType === "new" ? "bg-black text-white" : "bg-white text-gray-800"
          }`}
          onClick={() => setFormType("new")}
        >
          Add New Address
        </button>
        <button
          className={`flex-1 py-2 rounded-lg text-sm border ${
            formType === "saved" ? "bg-black text-white" : "bg-white text-gray-800"
          }`}
          onClick={() => setFormType("saved")}
        >
          Use Saved Address
        </button>
      </div>

      {/* New Address Form */}
      {formType === "new" ? (
        <div className="bg-gray-100 rounded-xl p-6">
          {/* Name Inputs */}
          <div className="flex gap-4 mb-4 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="text-sm text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Other inputs */}
          <div className="mb-4">
            <label className="text-sm text-gray-700">Street Address</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
              placeholder="Street Address"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-700">Apt, Suite, etc.</label>
            <input
              type="text"
              name="apt"
              value={formData.apt}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
              placeholder="Apartment, suite, unit, etc."
            />
          </div>

          <div className="flex gap-4 mb-6 flex-col sm:flex-row">
            <div className="flex-1">
              <label className="text-sm text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
                placeholder="State"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 bg-white rounded-lg border text-sm"
                placeholder="ZIP"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <button
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg text-sm"
              onClick={() =>
                setFormData({
                  firstName: "",
                  lastName: "",
                  street: "",
                  apt: "",
                  state: "",
                  zip: "",
                })
              }
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-black text-white py-2 rounded-lg text-sm"
              onClick={handleSaveAddress}
            >
              Save This Address
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-xl p-6 text-sm text-gray-700 max-h-64 overflow-y-auto">
          {loading ? (
            <p>Loading saved addresses...</p>
          ) : savedAddresses.length === 0 ? (
            <p>No saved addresses found.</p>
          ) : (
            savedAddresses.map((addr) => {
              const isSelected = addr._id === formData._id;
              return (
                <div
                  key={addr._id}
                  className={`mb-4 p-4 border rounded-lg cursor-pointer flex flex-col sm:flex-row sm:justify-between items-start sm:items-center
                    ${
                      isSelected
                        ? "border-black bg-white shadow-md"
                        : "border-gray-300 hover:bg-gray-200"
                    }`}
                  onClick={() => {
                    onAddressSelect(addr);
                    setFormData(addr);
                  }}
                >
                  <div>
                    <p className="font-medium">
                      {addr.firstName} {addr.lastName}
                    </p>
                    <p>
                      {addr.street}
                      {addr.apt ? `, ${addr.apt}` : ""}
                    </p>
                    <p>
                      {addr.state} {addr.zip}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFormType("new");
                      setFormData(addr);
                    }}
                    className="mt-2 sm:mt-0 sm:ml-4 px-3 py-1 bg-black text-white rounded-md text-xs whitespace-nowrap"
                  >
                    Edit
                  </button>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default AddressForm;
