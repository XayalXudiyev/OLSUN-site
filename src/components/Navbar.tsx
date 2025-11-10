"use client";

import LocaleSwitcher from "@/localSwitcher/LocaleSwithcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const locale = useLocale();
  const tNavbar = useTranslations("navbar");

  const navLinks = [
    { label: tNavbar("home"), href: `/${locale}#home` },
    { label: tNavbar("about"), href: `/${locale}#about-us` },
    { label: tNavbar("contact"), href: `/${locale}#contact` },
    { label: tNavbar("services"), href: `/${locale}/services` },
  ];

  return (
    <nav className="w-full border-b border-primary/30 bg-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-20 ">
        <div className="flex-1 flex items-center">
          <span className="text-[2rem] font-bold text-primary">Olsun</span>
        </div>
        <div className="flex-1 flex justify-center gap-8">
          {navLinks.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className="text-primary hover:underline text-base"
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <div className="flex-1 flex justify-end items-center">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
