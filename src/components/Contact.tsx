"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data";
import { label } from "framer-motion/client";

const links = [
  { label: "GitHub", href: siteConfig.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  {label  : "Twitter", href: siteConfig.x, icon: Twitter },
 
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 60px",
        textAlign: "center",
      }}
    >
      <SectionHeader
        tag="Get In Touch"
        title={`Let's Build Something<br/><span style="color:var(--accent)">Amazing Together</span>`}
        desc="Have a project in mind? I'd love to hear about it. Drop me a message and let's make something great."
        center
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="contact-card"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "28px",
          position: "relative",
          overflow: "hidden",
          maxWidth: "800px",
          margin: "48px auto 0",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(0,240,160,0.06), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Say Hello 👋
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(1.1rem, 3vw, 1.9rem)",
            fontWeight: 700,
            color: "var(--accent)",
            textDecoration: "none",
            display: "inline-block",
            margin: "20px 0 40px",
            letterSpacing: "-1px",
            transition: "text-shadow 0.3s",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.textShadow =
              "0 0 28px rgba(0,240,160,0.5)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.textShadow = "none")
          }
        >
          <Mail
            size={20}
            style={{ display: "inline", marginRight: 8, verticalAlign: "middle" }}
          />
          {siteConfig.email}
        </a>

        <div
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "100px",
                padding: "12px 24px",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.84rem",
                fontWeight: 500,
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(0,240,160,0.3)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(0,240,160,0.04)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </motion.div>


    </section>
  );
}
