import React, { useState } from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";

const testimonials = [
  {
    quote: "Understated, but unforgettable. It feels like it was made for me.",
    name: "Random Woman",
    location: "NY, USA",
    avatar: avatar1,
  },
  {
    quote: "Elegant design with a perfect fit. I’m in love with this piece!",
    name: "Jane Doe",
    location: "LA, USA",
    avatar: avatar2,
  },
  {
    quote: "The quality is exceptional. It’s my go-to for any occasion.",
    name: "Sarah Smith",
    location: "London, UK",
    avatar: avatar3,
  },
  {
    quote: "Absolutely stunning. I get compliments every time I wear it.",
    name: "Emily Zhang",
    location: "Toronto, CA",
    avatar: avatar4,
  },
  {
    quote: "It blends style and comfort like nothing else I own.",
    name: "Carlos Mendoza",
    location: "Madrid, Spain",
    avatar: avatar5,
  },
  {
    quote: "From the stitching to the fabric, it's flawless.",
    name: "Akira Tanaka",
    location: "Tokyo, Japan",
    avatar: avatar6,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .arrow-left {
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid white;
          margin-right: 6px;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .arrow-left {
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            border-right: 8px solid white;
            margin-right: 4px;
          }
        }
      `}</style>

      <section className="bg-black text-white py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between relative">
        {/* Text Content */}
        <div className="md:w-3/4">
          <h3 className="uppercase tracking-widest text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-left">
            OUR CUSTOMERS
          </h3>
          <blockquote className="text-2xl md:text-5xl font-light leading-snug md:leading-relaxed">
            “{testimonial.quote}”
          </blockquote>
          <p className="mt-4 md:mt-6 text-base md:text-lg font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.location}</p>
        </div>

        {/* Avatar Selector */}
        <div className="mt-6 md:mt-0 md:ml-8 flex md:flex-col overflow-x-auto md:overflow-y-auto space-x-4 md:space-x-0 md:space-y-4 pr-2 custom-scrollbar">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex items-center"
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index && <div className="arrow-left md:block hidden"></div>}
              <img
                src={t.avatar}
                alt={t.name}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover cursor-pointer border-2 transition-all ${
                  activeIndex === index
                    ? "border-white scale-110"
                    : "border-transparent opacity-60"
                }`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
