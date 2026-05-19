"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide">Son Hai Vo Real Estate</span>
            <span className="text-xs text-slate-400 font-normal">Commercial Real Estate · St. Petersburg, FL</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  pathname === link.href ? "text-white" : "text-slate-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold ml-2">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-800 pt-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white px-1",
                  pathname === link.href ? "text-white" : "text-slate-400"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold w-full mt-1">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Get in Touch</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

