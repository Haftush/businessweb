import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Pricing", path: "pricing" },
    { name: "About", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <h1 className="text-2xl font-bold text-secondary">WebStudio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer group ${
                    currentPage === link.path
                      ? "text-secondary"
                      : "text-white hover:text-secondary"
                  }`}
                >
                  {link.name}

                  {/* Animated underline for selected and hover states */}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ${
                      currentPage === link.path
                        ? "w-full"
                        : "group-hover:w-full"
                    }`}
                  />

                  {/* Pointer cursor for all states */}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => onNavigate("order")}
              className="bg-secondary text-primary px-6 py-2 rounded-md font-semibold hover:bg-secondary/90 transition-colors cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary/80 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`relative block w-full text-left px-3 py-3 text-base font-medium transition-all duration-300 cursor-pointer group ${
                  currentPage === link.path
                    ? "text-secondary"
                    : "text-white hover:text-secondary"
                }`}
              >
                {link.name}

                {/* Mobile underline indicator */}
                <span
                  className={`absolute bottom-2 left-3 right-3 h-0.5 bg-secondary transition-all duration-300 ${
                    currentPage === link.path
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavigate("order")}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium bg-secondary text-primary hover:bg-secondary/90 transition-colors cursor-pointer mt-2"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
