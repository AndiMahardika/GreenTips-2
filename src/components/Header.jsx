import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import useUser from '../store/userStore.js';
import useLogout from '../features/authentication/hooks/useLogout.jsx';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const { user } = useUser();
  const { handleLogout } = useLogout();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b-2 border-gray text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn-icons-png.freepik.com/256/9226/9226188.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">GreenTips-OR2</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <Button variant="danger" onClick={handleLogout}>Log Out</Button>
          ) : (
            <Link to="/register">
              <Button variant="success">SignUp</Button>
            </Link>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-expanded={isNavbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 transition-transform ${isNavbarOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavbarOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-2 border-gray rounded-lg bg-neutral md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:font-semibold md:p-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;