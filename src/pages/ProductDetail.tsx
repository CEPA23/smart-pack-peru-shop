
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const product = {
  id: 1,
  name: "SmartPack Pro",
  description: "Mochila inteligente con puerto USB y compartimiento para laptop",
  price: "S/. 299.00",
  colors: ["Negro", "Azul", "Gris"],
  sizes: ["15\"", "17\""],
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Woman using laptop
  features: [
    "Puerto USB integrado",
    "Compartimiento acolchado para laptop",
    "Sistema antirrobo",
    "Material impermeable",
    "Múltiples bolsillos organizadores",
  ],
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.description}</p>
            <p className="text-3xl font-bold text-primary">{product.price}</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un color" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.colors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tamaño</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button size="lg" className="w-full">
              Añadir al carrito
            </Button>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Características</h3>
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
