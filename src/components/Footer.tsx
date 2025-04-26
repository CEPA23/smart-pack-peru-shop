
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SmartPack</h3>
            <p className="text-gray-600">
              Mochilas inteligentes para el mundo moderno.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-600">Email: info@smartpack.pe</p>
            <p className="text-gray-600">Teléfono: (01) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-md border"
              />
              <Button>Suscribir</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © 2025 SmartPack. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

