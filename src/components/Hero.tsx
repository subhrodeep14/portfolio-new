"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Download, ChevronDown } from "lucide-react";
import { siteConfig, stats, skillGroups } from "@/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const topSkills = skillGroups
  .flatMap((g) => g.skills)
  .filter((s) => s.primary)
  .slice(0, 6)
  .map((s) => s.name);

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "120px 60px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background radial glows */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 60% at 70% 50%, rgba(0,153,255,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 20% 80%, rgba(0,240,160,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(123,97,255,0.05) 0%, transparent 60%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* LEFT — Text */}
        <div>
          <motion.div
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,240,160,0.08)",
              border: "1px solid rgba(0,240,160,0.2)",
              borderRadius: "100px",
              padding: "6px 16px",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
              className="pulse-animate"
            />
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            custom={0.25}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-head)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-3px",
              marginBottom: "20px",
            }}
          >
            Hello, I&apos;m
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Subhrodeep
            </span>
            <br />
            <span style={{ color: "var(--muted)" }}>Acharya</span>
          </motion.h1>

          <motion.p
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "40px",
              fontWeight: 300,
            }}
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#work"
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
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              View My Work <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
                padding: "14px 30px",
                borderRadius: "100px",
                fontWeight: 500,
                fontSize: "0.88rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Let&apos;s Talk <MessageCircle size={16} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ display: "flex", gap: "40px", marginTop: "52px" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-head)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    letterSpacing: "-1px",
                    color: "var(--text)",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>{s.num}</span>
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: "2px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
          className="hero-visual"
        >
          {/* Float badge top */}
          <motion.div
            className="float-animate"
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              zIndex: 2,
              background: "rgba(13,17,23,0.9)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "10px 16px",
              fontSize: "0.78rem",
              whiteSpace: "nowrap",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ⚡ <span>Clean Code & Fast Delivery</span>
          </motion.div>

          {/* Main card */}
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "40px",
              backdropFilter: "blur(10px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top glow line */}
            <div
              style={{
                position: "absolute",
                top: -1,
                left: 20,
                right: 20,
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, var(--accent), transparent)",
              }}
            />

            {/* Avatar */}
            <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent2), var(--accent3))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-head)",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#fff",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                SA
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: "50%",
                  background: "conic-gradient(var(--accent), var(--accent2), var(--accent3), var(--accent))",
                  zIndex: 0,
                  animation: "spin-ring 4s linear infinite",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                color: "var(--accent)",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                marginBottom: "22px",
              }}
            >
              {siteConfig.role}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "5px 12px",
                    fontSize: "0.74rem",
                    color: "var(--muted)",
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8rem",
                color: "var(--muted)",
                padding: "10px 16px",
                background: "rgba(0,240,160,0.05)",
                border: "1px solid rgba(0,240,160,0.15)",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
                className="pulse-animate"
              />
              {siteConfig.availability}
            </div>

            {/* Download CV */}
            <a
              href={"/resume.pdf"}
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              <Download size={14} /> Download CV
            </a>
          </div>

          {/* Float badge bottom */}
          <motion.div
            className="float-animate"
            style={{
              position: "absolute",
              bottom: "30px",
              left: "-30px",
              zIndex: 2,
              background: "rgba(13,17,23,0.9)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "10px 16px",
              fontSize: "0.78rem",
              whiteSpace: "nowrap",
              backdropFilter: "blur(10px)",
              animationDelay: "1.5s",
            }}
          >
            🚀 Based in India
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "var(--muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <ChevronDown size={14} className="pulse-animate" />
      </motion.div>


    </section>
  );
}
