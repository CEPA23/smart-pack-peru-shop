
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "SmartPack Pro",
    description: "Mochila inteligente con puerto USB y compartimiento para laptop",
    price: "S/. 299.00",
    colors: ["Negro", "Azul", "Gris"],
    sizes: ["15\"", "17\""],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 2,
    name: "SmartPack Lite",
    description: "Mochila ligera con sistema antirrobo",
    price: "S/. 199.00",
    colors: ["Negro", "Rojo", "Azul"],
    sizes: ["13\"", "15\""],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    id: 3,
    name: "SmartPack Elite",
    description: "Mochila premium con cargador inalámbrico integrado",
    price: "S/. 399.00",
    colors: ["Negro", "Gris", "Azul marino"],
    sizes: ["15\"", "17\""],
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold text-primary mb-2">{product.price}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Colores: {product.colors.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                Tamaños: {product.sizes.join(", ")}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => window.location.href = `/product/${product.id}`}>
              Ver detalles
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

