"use client";

import LocaleSwitcher from "@/components/localSwitcher/LocaleSwithcher";
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
    <nav className="w-full border-b border-primary/30 px-20 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3  ">
        <div className=" flex items-center">
          <Link href="/" className="text-[2rem] font-bold text-primary">
            Olsun
          </Link>
        </div>
        <div className=" flex justify-center gap-8">
          {navLinks.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className="text-primary/80 hover:text-primary text-base"
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
