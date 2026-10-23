import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-theme bg-surface/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight focus-ring rounded-md">
          <span className="text-ink">App</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-ink focus-ring rounded px-2 py-1 ${
                  isActive ? "text-blue-600 font-semibold" : "text-ink-muted"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-muted focus-ring"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-theme bg-surface px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-ink hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
