"use client";
import Link from "next/link";
import { useRef } from "react";
export function SiteHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menu.current?.removeAttribute("open");
  return (
    <header className="site-header">
      <a
        href="#top"
        className="wordmark"
        aria-label="Tyler Cox, home"
        onClick={closeMenu}
      >
        TC<span className="brand-dot">.</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#projects">Selected work</a>
        <a href="#about">About</a>
        <Link href="/resume">Résumé</Link>
      </nav>
      <a className="header-contact" href="mailto:cox.1644@osu.edu">
        Let’s talk <span aria-hidden="true">↗</span>
      </a>
      <details ref={menu} className="mobile-nav">
        <summary>
          Menu <span aria-hidden="true">+</span>
        </summary>
        <nav aria-label="Mobile navigation">
          <a href="#projects" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <Link href="/resume" onClick={closeMenu}>
            Résumé
          </Link>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </details>
    </header>
  );
}
