import { useEffect, useState } from "react";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },

  
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaCoffee className="text-amber-400 text-3xl" />

          <h1 className="text-white text-2xl font-bold">
            Ember & Bean
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-amber-400 transition"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Reserve Button */}
        <button
          onClick={() => scrollToSection("reservation")}
          className="hidden md:block bg-amber-500 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Reserve Table
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <ul className="flex flex-col items-center py-8 gap-8 text-white text-lg">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-amber-400"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}

            <button
              className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold"
              onClick={() => scrollToSection("reservation")}
            >
              Reserve Table
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;