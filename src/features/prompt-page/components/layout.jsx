import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import { Menu } from "./layout.menu.jsx";
import useLogout from "../../authentication/hooks/useLogout.jsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Prompt", href: "/prompt" },
  { label: "Collection", href: "/collection" },
];

export default function Layout({ children }) {
  const {handleLogout} = useLogout();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-secondary h-screen">
      {/* Button untuk membuka sidebar */}
      <button
        onClick={toggleSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Overlay untuk menutup sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-primary text-white border-r-2 border-gray ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between">
          <div>
            <Link to="/">
              <span className="ms-3 font-bold flex justify-center">GreenTips</span>
            </Link>
            <ul className="space-y-2 font-medium mt-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Menu label={link.label} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
          
          <Button variant="danger" size="default" fullWidth onClick={handleLogout}>Log Out</Button>
        </div>
      </aside>

      {/* Konten Utama */}
      <div className="p-4 md:p-0 sm:ml-64 bg-secondary h-fit">{children}</div>
    </div>
  );
}