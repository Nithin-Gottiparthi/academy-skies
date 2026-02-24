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

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-secondary/95 backdrop-blur-md shadow-float"
    : "bg-transparent";

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full transition-all duration-300 ${navBg}`}>
      <div className="flex h-14 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Academy Aviation Online" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Select value={currency.code} onValueChange={(v) => setCurrency(currencies.find((c) => c.code === v)!)}>
              <SelectTrigger className="h-8 w-24 rounded-full border-white/20 bg-white/10 text-xs text-white">
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

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10 rounded-full h-9 w-9">
              <ShoppingCart className="h-4 w-4" />
              {items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {items.length}
                </span>
              )}
            </Button>
          </Link>

          <Link to="/admin" className="hidden md:block">
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8 px-4">
              <Plane className="mr-1 h-3 w-3" /> Admin
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 rounded-full h-9 w-9" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-4 mb-4 mt-1 rounded-2xl bg-secondary/95 backdrop-blur-md px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10">
              Admin Portal
            </Link>
            <div className="mt-2 pt-2 border-t border-white/10">
              <Select value={currency.code} onValueChange={(v) => setCurrency(currencies.find((c) => c.code === v)!)}>
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
      )}
    </nav>
  );
};

export default Navbar;
