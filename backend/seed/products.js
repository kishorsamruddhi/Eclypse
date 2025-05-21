const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("MongoDB connected for seeding...");

  // Sample product data
  const products = [
    {
      title: "Modern Minimalist - Sky Blue",
      description: "Elegant Minimalist artwork",
      price: 7999,
      imageUrl: "https://www.inavatishop.com/cdn/shop/articles/blog_7ce9835c-5e6a-4c1e-ad97-92d7df997250.jpg?v=1712740284",
      category: "Art",
    },
    {
      title: "Canvas No. 5 - Midnight Blue",
      description: "Deep blue acrylic canvas painting",
      price: 5499,
      imageUrl: "https://media.thegaze.media/thegaze-october-prod/media/December-23/06-12-23/deep-blue-down/deep-blue-c-01-anthropologie-com.jpg",
      category: "Art",
    },
    {
      title: "Print No. 3 - Abstract Shapes",
      description: "High-resolution abstract wall print",
      price: 2999,
      imageUrl: "https://fashor.com/cdn/shop/files/25297_11.jpg?v=1714394503&width=1445",
      category: "Print",
    },
  ];

  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded successfully");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.disconnect();
  }
});
