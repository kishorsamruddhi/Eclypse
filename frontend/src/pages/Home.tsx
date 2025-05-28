import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Product from "../components/Product";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ProductCatalog from "../components/ProductCatalog";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div className="transition-colors duration-300 min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Product />
      <ProductCatalog />
      <Testimonials />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
