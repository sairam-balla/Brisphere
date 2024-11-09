import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 tablet:px-10 tablet:py-6 laptop:px-16 laptop:py-8">
      <Link to="/">
        <h1 className="text-2xl font-bold laptop:text-3xl">Brisphere</h1>
      </Link>

      <nav>
        {/* Desktop View */}
        <ul className="hidden tablet:flex gap-6 font-semibold laptop:text-lg">
          <li>Discover</li>
          <li>Services</li>
          <li>About Us</li>
        </ul>

        {/* Mobile View (Hamburger button) */}
        <div className="tablet:hidden flex items-center">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="tablet:hidden absolute top-16 right-6 bg-white shadow-lg p-4 rounded-lg">
            <li className="py-2">Discover</li>
            <li className="py-2">Services</li>
            <li className="py-2">About Us</li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
