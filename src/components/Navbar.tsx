"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(8,11,16,0.97)",
          backdropFilter: "blur(20px)",
          zIndex: 99,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "32px",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.77,0,0.175,1)",
        }}
      >
        {[...navItems, { label: "Contact", href: "#contact" }].map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMobile}
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "2.2rem",
              fontWeight: 800,
              color: "var(--text)",
              textDecoration: "none",
              letterSpacing: "-1px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text)")}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Navbar */}
      <nav
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "14px 60px" : "22px 60px",
          backdropFilter: "blur(20px)",
          background: "rgba(8,11,16,0.75)",
          borderBottom: "1px solid var(--border)",
          transition: "padding 0.3s",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-1px",
          }}
        >
          {siteConfig.shortName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "var(--muted)")
                }
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                background: "var(--accent)",
                color: "#080b10",
                padding: "10px 22px",
                borderRadius: "100px",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "box-shadow 0.3s, transform 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 28px rgba(0,240,160,0.5)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = "none";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "none",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>


    </>
  );
}
