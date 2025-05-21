import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Product from "../components/Product";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ProductCatalog from "../components/ProductCatalog";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans px-6 sm:px-8 md:px-12 lg:px-20">
      <Navbar />
      <Hero />
      <Gallery />
      <Product />
      <ProductCatalog />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
