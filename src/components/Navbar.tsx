
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary cursor-pointer">O'ipismart</span>
          </Link>
          <div className="flex items-center">
            <Link to="/cart">
              <Button variant="ghost">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
