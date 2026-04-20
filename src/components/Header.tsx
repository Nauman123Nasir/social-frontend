"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b border-white/10 glass-effect sticky top-0 z-50 bg-[#0a0a14]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-transform hover:scale-105 duration-200" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Downifi Logo" className="h-[50px] md:h-[60px] w-auto object-contain drop-shadow-lg" />
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 items-center text-sm hidden md:flex">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition font-medium ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-lg p-2 transition-all duration-200 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a14] border-b border-white/10 shadow-2xl py-4 px-4 flex flex-col space-y-2 animate-in slide-in-from-top-2 duration-200 z-50">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={closeMenu}
              className={`text-lg transition-all font-bold p-3 rounded-xl border ${
                pathname === link.href 
                  ? 'text-primary bg-primary/10 border-primary/20 pl-5' 
                  : 'text-gray-300 border-transparent hover:text-white hover:bg-white/5 pl-4 hover:pl-5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
