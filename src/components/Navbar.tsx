
import { Search, ShoppingCart } from "lucide-react";
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
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
            {['Mochilas', 'Productos','Accesorios'].map((item) => (
              <a key={item} href="#" className="whitespace-nowrap text-sm hover:text-blue-600">
                {item}
              </a>
            ))}
          </div>
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
