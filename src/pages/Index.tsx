
import { Navbar } from "@/components/Navbar";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
              Mochilas Inteligentes SmartPack
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Descubre nuestra colección de mochilas con tecnología integrada
            </p>
            <ProductCarousel />
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestra Colección
            </h2>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

