
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "O'ipiSmart Pro",
    description: "Mochila inteligente con puerto USB y compartimiento para laptop",
    price: "S/. 299.00",
    colors: ["Negro", "Azul", "Gris"],
    sizes: ["15\"", "17\""],
    image: "/images/nueva.png", 
  },
  {
    id: 2,
    name: "O'ipiSmart Lite",
    description: "Mochila ligera con sistema antirrobo",
    price: "S/. 199.00",
    colors: ["Negro", "Rojo", "Azul"],
    sizes: ["13\"", "15\""],
    image: "/images/smartpack-lite.jpeg", 
  },
  {
    id: 3,
    name: "O'ipiSmart Elite",
    description: "Mochila premium con cargador inalámbrico integrado",
    price: "S/. 399.00",
    colors: ["Negro", "Gris", "Azul marino"],
    sizes: ["15\"", "17\""],
    image: "/images/smartpack-elite.jpeg", 
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
            className="w-full h-48 object-contain rounded-lg mb-4 bg-white"
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
