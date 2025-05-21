import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import product_vid from "../assets/product-vid.mp4";
import productimg1 from "../assets/Frame 12.png";
import productimg2 from "../assets/Frame 11.png";
import productimg3 from "../assets/Frame 13.png";

const product = {
  name: "Silhouette No.1 - Vermillion",
  price: "₹ 7,999",
  description:
    "A tailored composition of motion. Cut from structured wool with a sculpted shoulder, this piece captures presence without force. Woven with the softest cashmere, the silhouette is strong but quiet.",
  sizes: ["XS", "S", "M", "L", "XL"],
};

const dropdowns = [
  { title: "Size & Fit", content: "Slim fit. Model is 6’1” and wears size M." },
  {
    title: "Delivery & Returns",
    content: "Free shipping within India. Returns accepted within 10 days.",
  },
  {
    title: "How This Was Made",
    content: "Crafted in India using sustainable cashmere and wool blend.",
  },
];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [rightHeight, setRightHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (rightRef.current) {
        setRightHeight(rightRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      {/* Product Title */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mt-8">
        {product.name}
      </h1>

      {/* Product Section */}
      <section className="flex flex-col md:flex-row px-4 md:px-8 py-8 md:py-16 gap-0">
        {/* Left: Video */}
        <div className="w-full md:w-1/2 overflow-hidden">
          <video
            ref={videoRef}
            src={product_vid}
            autoPlay
            muted
            loop
            playsInline
            className="w-full object-cover rounded-lg md:h-auto h-[300px]"
            style={{
              height: window.innerWidth < 768 ? "200px" : rightHeight ? `${rightHeight}px` : undefined,
            }}
          />
        </div>

        {/* Right: Product Details */}
        <div
          ref={rightRef}
          className="w-full md:w-1/2 bg-white text-black p-4 md:p-8 rounded-lg shadow-md flex flex-col justify-between"
        >
          {/* Hide description on mobile */}
          <p className="text-gray-700 mb-6 hidden md:block">{product.description}</p>

          {/* Gallery */}
          <div className="flex gap-2 md:gap-4">
            {[productimg1, productimg2, productimg3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="rounded-lg flex-1 h-32 object-cover"
                style={{ minWidth: 0 }}
              />
            ))}
          </div>


          <hr className="my-6 border-t border-gray-300" />

          {/* Price and Size Selection */}
          <div className="text-lg">
            <p className="font-bold text-2xl text-black">
              {product.price}
              <span className="ml-2 text-sm font-normal text-gray-600">
                MRP incl. of all taxes
              </span>
            </p>

            {/* Size Buttons */}
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-lg text-gray-700">
                  Please select the size
                </p>
                <span className="text-sm underline text-gray-500 cursor-pointer">
                  Size Chart
                </span>
              </div>

              {/* Sizes smaller, one line, no wrap */}
              <div className="flex gap-2 mt-4 overflow-x-auto whitespace-nowrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-shrink-0 min-w-[40px] md:min-w-[100px] px-2 py-2 border rounded-lg transition text-gray-500 text-sm md:text-base font-medium ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <Link to="/CartPage" className="flex-1">
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-black py-3 rounded-lg transition text-lg">
                  Add to Cart
                </button>
              </Link>
              <Link to="/checkout" className="flex-1">
                <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition text-lg">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Info Section */}
      <div className="bg-black text-white px-8 py-16 space-y-4">
        {dropdowns.map((item, index) => (
          <div key={index} className="border-t border-gray-700 pt-6">
            <div
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg text-gray-300">{item.title}</h3>
              {openDropdown === index ? (
                <>{FaChevronUp({ className: "text-white" })}</>
              ) : (
                <>{FaChevronDown({ className: "text-white" })}</>
              )}
            </div>
            {openDropdown === index && (
              <p className="mt-4 text-gray-400 text-sm">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
