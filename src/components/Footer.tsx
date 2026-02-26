"use client";
import { siteConfig } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "var(--text)",
          letterSpacing: "-0.5px",
        }}
      >
        {siteConfig.shortName}
        <span style={{ color: "var(--accent)" }}>.</span>
      </div>
      <div>© {year} {siteConfig.name}. Built with Next.js &amp; ❤️</div>
      <div>{siteConfig.location}</div>
    </footer>
  );
}
