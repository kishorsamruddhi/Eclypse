import { Product } from "../types/product";

export const getProduct = (): Product => ({
  name: "Silhouette No.1 - Vermillion",
  price: "₹ 7,999",
  description:
    "A tailored composition of motion. Cut from structured wool with a sculpted shoulder, this piece captures presence without force. Woven with the softest cashmere, the silhouette is strong but quiet.",
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
  ],
});
