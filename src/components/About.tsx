"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import SectionHeader from "./SectionHeader";

import { siteConfig, aboutStats } from "@/data";

const highlights = [
  {
    icon: "🎯",
    text: "Detail-oriented developer focused on clean, maintainable code and pixel-perfect implementation",
  },
  {
    icon: "⚡",
    text: "Fast turnaround times without compromising on quality — deadlines matter",
  },
  {
    icon: "💬",
    text: "Clear communication throughout the project — no surprises, only results",
  },
];

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}
      className="about-grid"
    >
      {/* Visual card */}
      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -30 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Bottom glow line */}
          <div
            style={{
              position: "absolute",
              bottom: -1,
              left: 20,
              right: 20,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--accent2), transparent)",
            }}
          />

          {/* Big initials */}
          <div
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "7rem",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-8px",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            SA
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            A developer from India, passionate about building things for the web
            that are fast, accessible, and delightful to use.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginTop: "24px",
            }}
          >
            {aboutStats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "16px",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(0,240,160,0.2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)")
                }
              >
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "-1px",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.74rem",
                    marginTop: "2px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 30 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeader
          tag="About Me"
          title="The Person Behind the Code"
        />

        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
            marginTop: "20px",
            marginBottom: "14px",
          }}
        >
          I&apos;m {siteConfig.name}, a software developer who loves turning ideas
          into elegant digital products. I excel at crafting both functional and
          beautiful experiences that users actually enjoy.
        </p>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: "28px",
          }}
        >
          I&apos;m proficient in various programming languages and technologies, always
          learning and evolving. Great code is both art and engineering — it
          should work flawlessly and be a pleasure to maintain.
        </p>

        {/* Highlights */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
          {highlights.map((h) => (
            <div
              key={h.icon}
              style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(0,240,160,0.07)",
                  border: "1px solid rgba(0,240,160,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                {h.icon}
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text)",
                  lineHeight: 1.55,
                  paddingTop: "9px",
                  fontWeight: 300,
                }}
              >
                {h.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="resume.pdf"
          download
          style={{
            background: "var(--accent)",
            color: "#080b10",
            padding: "14px 30px",
            borderRadius: "100px",
            fontWeight: 700,
            fontSize: "0.88rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 32px rgba(0,240,160,0.5)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Download Resume <Download size={16} />
        </a>
      </motion.div>


    </section>
  );
}
