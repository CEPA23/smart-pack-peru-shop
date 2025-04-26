
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "O'ipiSmart Pro",
    price: "S/. 399.00",
    image: "/images/nueva.png",
  },
  {
    id: 2,
    name: "O'ipiSmart Lite",
    price: "S/. 199.00",
    image: "/lovable-uploads/8ded71eb-6876-4555-b0e2-1e08d34fdc12.png",
  },
  {
    id: 3,
    name: "O'ipiSmart Elite",
    price: "S/. 299.00",
    image: "/lovable-uploads/5d1b0af7-666d-4b3d-b8be-35213514d5cc.png",
  },
];

export const ProductCarousel = () => {
  const navigate = useNavigate();

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <Card className="border-none cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <CardContent className="flex aspect-video items-center justify-center p-2 md:p-6">
                <div className="space-y-4 w-full">
                  <div className="w-full h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <p className="text-xl font-bold text-primary">{product.price}</p>
                  </div>
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
