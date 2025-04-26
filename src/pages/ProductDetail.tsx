import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    name: "SmartPack Pro",
    description: "Mochila inteligente con puerto USB y compartimiento para laptop",
    price: "S/. 299.00",
    colors: ["Negro", "Azul", "Gris"],
    sizes: ["15\"", "17\""],
    image: "/images/nueva.png",
    features: [
      "Puerto USB integrado",
      "Compartimiento acolchado para laptop",
      "Sistema antirrobo",
      "Material impermeable",
      "Múltiples bolsillos organizadores",
    ],
  },
  {
    id: 2,
    name: "SmartPack Lite",
    description: "Mochila ligera con sistema antirrobo",
    price: "S/. 199.00",
    colors: ["Negro", "Rojo", "Azul"],
    sizes: ["13\"", "15\""],
    image: "/lovable-uploads/8ded71eb-6876-4555-b0e2-1e08d34fdc12.png",
    features: [
      "Sistema antirrobo",
      "Material impermeable",
      "Ligera y compacta",
      "Bolsillos organizadores",
      "Puerto USB",
    ],
  },
  {
    id: 3,
    name: "SmartPack Elite",
    description: "Mochila premium con cargador inalámbrico integrado",
    price: "S/. 399.00",
    colors: ["Negro", "Gris", "Azul marino"],
    sizes: ["15\"", "17\""],
    image: "/lovable-uploads/5d1b0af7-666d-4b3d-b8be-35213514d5cc.png",
    features: [
      "Cargador inalámbrico",
      "Puerto USB de alta velocidad",
      "Sistema antirrobo avanzado",
      "Material premium impermeable",
      "Compartimientos especiales",
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find(p => p.id === Number(id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  const handleAddToCart = () => {
    toast({
      title: "Producto agregado",
      description: "El producto ha sido agregado al carrito",
    });
    navigate("/cart");
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-contain"
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
            
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
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
