"use client";

import LocaleSwitcher from "@/components/localSwitcher/LocaleSwithcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const locale = useLocale();
  const tNavbar = useTranslations("navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: tNavbar("home"), href: `/${locale}#home` },
    { label: tNavbar("about"), href: `/${locale}#about-us` },
    { label: tNavbar("contact"), href: `/${locale}#contact` },
    { label: tNavbar("services"), href: `/${locale}/services` },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-primary/30 px-4 md:px-10 lg:px-20 fixed top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link
            href={`/${locale}`}
            className="text-xl md:text-[2rem] font-bold text-primary"
            onClick={closeMenu}
          >
            Olsun
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-6 lg:gap-8">
          {navLinks.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className="text-primary/80 hover:text-primary text-sm lg:text-base transition-colors"
            >
              {nav.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                onClick={closeMenu}
                className="block px-3 py-2 text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
