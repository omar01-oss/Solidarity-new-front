import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import UserProfileDropdown from "./UserProfileDropdown";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false to test guest view
  const [menuOpen, setMenuOpen] = useState(false);
  const [solidarityOpen, setSolidarityOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-12">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-44 h-auto" />
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {/* Solidarity Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolidarityOpen(!solidarityOpen)}
                className="flex items-center px-3 py-2 font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Solidarity
                <span className={`ml-1 transition-transform ${solidarityOpen ? "rotate-180" : ""}`}>&#9660;</span>
              </button>
              {solidarityOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-52 animate-fadeIn">
                  <NavLink to="/apropos" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    About
                  </NavLink>
                  <NavLink to="/contact" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Contact
                  </NavLink>
                  <NavLink to="/professionals" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Professionals
                  </NavLink>
                  <NavLink to="/test" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Mental Test
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/Professionals" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Reservation
            </NavLink>
            <NavLink to="/activities-centers" className="px-3 py-2 text-gray-700 hover:text-blue-600">
              Activities & Centers
            </NavLink>

            {/* Community Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCommunityOpen(!communityOpen)}
                className="flex items-center px-3 py-2 font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Community & Resources
                <span className={`ml-1 transition-transform ${communityOpen ? "rotate-180" : ""}`}>&#9660;</span>
              </button>
              {communityOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-52 animate-fadeIn">
                  <NavLink to="/community" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Community
                  </NavLink>
                  <NavLink to="/galerie" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Gallery
                  </NavLink>
                  <a href="https://solidarity-mentalhealth.blogspot.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                    Blog
                  </a>
                </div>
              )}
            </div>

            {/* Login/Register or Profile Dropdown */}
            {isLoggedIn ? (
              <UserProfileDropdown onLogout={handleLogout} />
            ) : (
              <>
                <NavLink to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Register
                </NavLink>
                <NavLink to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Log In
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-4 space-y-2 bg-white border-t shadow-sm">
          {/* Solidarity */}
          <button
            onClick={() => setSolidarityOpen(!solidarityOpen)}
            className="w-full text-left px-3 py-2 flex justify-between items-center font-medium text-gray-700 hover:text-blue-600"
          >
            Solidarity
            <span className={`ml-1 transition-transform ${solidarityOpen ? "rotate-180" : ""}`}>&#9660;</span>
          </button>
          {solidarityOpen && (
            <div className="pl-3 space-y-1">
              <NavLink to="/apropos" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">About</NavLink>
              <NavLink to="/contact" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Contact</NavLink>
              <NavLink to="/professionals" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Professionals</NavLink>
              <NavLink to="/test" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Mental Test</NavLink>
            </div>
          )}

          <NavLink to="/Professionals" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Reservation</NavLink>
          <NavLink to="/sports" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Activities & Centers</NavLink>

          {/* Community */}
          <button
            onClick={() => setCommunityOpen(!communityOpen)}
            className="w-full text-left px-3 py-2 flex justify-between items-center font-medium text-gray-700 hover:text-blue-600"
          >
            Community & Resources
            <span className={`ml-1 transition-transform ${communityOpen ? "rotate-180" : ""}`}>&#9660;</span>
          </button>
          {communityOpen && (
            <div className="pl-3 space-y-1">
              <NavLink to="/community" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Community</NavLink>
              <NavLink to="/galerie" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Gallery</NavLink>
              <a href="https://solidarity-mentalhealth.blogspot.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">Blog</a>
            </div>
          )}

          {!isLoggedIn && (
            <>
              <NavLink to="/signup" className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Register</NavLink>
              <NavLink to="/login" className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Log In</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
