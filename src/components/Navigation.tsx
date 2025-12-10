import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import openxpertLogo from "@/assets/openxpert-logo.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "ERP Systems", path: "/services/erp" },
    { name: "Custom E-Commerce", path: "/services/ecommerce" },
    { name: "RMM Services", path: "/services/rmm" },
    { name: "AMC Support", path: "/services/amc" },
    { name: "Community Projects", path: "/services/community" },
    { name: "Web Development", path: "/services/web" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={openxpertLogo}
                alt="OpenXpert Solutions"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 bg-primary/30 -z-10 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-semibold text-foreground hidden md:block">
              OpenXpert Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about") ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-link text-muted-foreground flex items-center gap-1">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 glass-strong rounded-2xl overflow-hidden shadow-lg animate-slide-in-up"> {/*changed mt-2 to mt-0 to remove gap triggering leave*/}
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={`nav-link ${isActive("/portfolio") ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "text-primary font-semibold" : "text-muted-foreground"}`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden lg:inline-flex glass-card hover:glow-effect">
              Book a Consultation
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 glass-card rounded-2xl p-6 animate-slide-in-up">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="nav-link text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div>
                <button
                  className="nav-link text-muted-foreground flex items-center gap-1 w-full justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className="nav-link text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="nav-link text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="glass-card hover:glow-effect w-full mt-4">
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
