"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled
          ? "border-b border-ink-200/80 bg-white/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between">
        <a href="#" aria-label="SunyaOne home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink-200 bg-white md:hidden">
          <div className="container-px flex flex-col gap-1 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50 hover:text-ink-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
