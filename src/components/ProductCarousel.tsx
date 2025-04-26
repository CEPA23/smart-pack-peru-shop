
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const products = [
  {
    id: 1,
    name: "SmartPack Pro",
    price: "S/. 299.00",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 2,
    name: "SmartPack Lite",
    price: "S/. 199.00",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    id: 3,
    name: "SmartPack Elite",
    price: "S/. 399.00",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
];

export const ProductCarousel = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <Card className="border-none">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="space-y-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-xl font-bold text-primary">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

