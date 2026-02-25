import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Globe, Plane } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { currencies } from "@/data/currencies";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items } = useCart();
  const { currency, setCurrency } = useCurrency();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isHome = location.pathname === "/";
  const navBg =
    scrolled || !isHome
      ? "bg-secondary/95 backdrop-blur-md shadow-float"
      : "bg-transparent";

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full transition-all duration-300 ${navBg}`}
    >
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Academy Aviation Online" className="h-7 sm:h-8 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Currency - hidden on very small screens */}
          <div className="hidden sm:block">
            <Select
              value={currency.code}
              onValueChange={(v) =>
                setCurrency(currencies.find((c) => c.code === v)!)
              }
            >
              <SelectTrigger className="h-8 w-20 md:w-24 rounded-full border-white/20 bg-white/10 text-xs text-white">
                <Globe className="mr-1 h-3 w-3" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    {c.symbol} {c.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Cart */}
          <Link to="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10 rounded-full h-9 w-9"
            >
              <ShoppingCart className="h-4 w-4" />
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/admin">
              <Button size="sm" className="rounded-full h-8 px-4 text-xs">
                <Plane className="mr-1 h-3 w-3" /> Admin
              </Button>
            </Link>

            <Link to="https://academyaviationonline.instructure.com/login/canvas">
              <Button size="sm" className="rounded-full h-8 px-4 text-xs">
                <Plane className="mr-1 h-3 w-3" /> Student
              </Button>
            </Link>

            <Link to="https://trainers-portal.netlify.app/">
              <Button size="sm" className="rounded-full h-8 px-4 text-xs">
                <Plane className="mr-1 h-3 w-3" /> Trainer
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 rounded-full h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-16 w-full px-4 lg:hidden">
          <div className="rounded-2xl bg-secondary/95 backdrop-blur-md p-4 shadow-xl">
            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-2">
                <Link to="/admin">
                  <Button className="w-full rounded-lg text-sm">Admin Portal</Button>
                </Link>

                <Link to="https://academyaviationonline.instructure.com/login/canvas">
                  <Button className="w-full rounded-lg text-sm">Student Login</Button>
                </Link>

                <Link to="https://trainers-portal.netlify.app/">
                  <Button className="w-full rounded-lg text-sm">Trainer Login</Button>
                </Link>
              </div>

              <div className="border-t border-white/10 pt-3">
                <Select
                  value={currency.code}
                  onValueChange={(v) =>
                    setCurrency(currencies.find((c) => c.code === v)!)
                  }
                >
                  <SelectTrigger className="h-9 w-full rounded-lg border-white/20 bg-white/10 text-xs text-white">
                    <Globe className="mr-1 h-3 w-3" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        {c.symbol} {c.code}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;