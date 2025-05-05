
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-secondary flex items-center">
          <span className="text-primary">study.to/exam</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-secondary hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/quiz" className="text-secondary hover:text-primary transition-colors">
            Quiz
          </Link>
          <Link to="/about" className="text-secondary hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Start for Free
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
