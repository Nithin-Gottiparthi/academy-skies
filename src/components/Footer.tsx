import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <img src={logo} alt="Academy Aviation Online" className="h-10 w-auto mb-4" />
          <p className="text-sm text-white/70">
            World-class aviation training accessible anywhere, anytime. FAA-aligned courses for pilots and aviation professionals.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold text-white">Courses</h4>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <Link to="/courses" className="hover:text-white transition-colors">All Courses</Link>
            <span>Pilot Training</span>
            <span>Safety & Weather</span>
            <span>Drone Operations</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold text-white">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>Careers</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold text-white">Support</h4>
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-center gap-2 text-sm text-white/40">
        <Plane className="h-4 w-4" />
        © {new Date().getFullYear()} Academy Aviation Online. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
