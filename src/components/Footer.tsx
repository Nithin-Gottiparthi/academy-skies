import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-display text-lg font-bold">Academy Aviation Online</h3>
          <p className="text-sm opacity-80">
            World-class aviation training accessible anywhere, anytime. FAA-aligned courses for pilots and aviation professionals.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Courses</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/courses" className="hover:opacity-100">All Courses</Link>
            <span>Pilot Training</span>
            <span>Safety & Weather</span>
            <span>Drone Operations</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/about" className="hover:opacity-100">About Us</Link>
            <Link to="/contact" className="hover:opacity-100">Contact</Link>
            <span>Careers</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Support</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Academy Aviation Online. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
