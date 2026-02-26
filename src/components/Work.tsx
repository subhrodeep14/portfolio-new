

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      className="section-pad"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 60px" }}
    >
      <SectionHeader
        tag="Portfolio"
        title="Selected Work"
        desc="Real-world projects including AI SaaS apps, full-stack systems, and scalable web products."
      />

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          marginTop: "60px",
        }}
        className="work-grid"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "transform 0.4s, border-color 0.4s, box-shadow 0.4s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,153,255,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Thumbnail / Project Image */}
            <div
               style={{
                height: "180px",
                background: `linear-gradient(135deg, ${project.gradient
                  .replace("from-[", "")
                  .replace("]", "")
                  .replace(" to-[", ", ")
                  .replace("]", "")})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
              className={`bg-gradient-to-br ${project.gradient}`}
              // style={{
              //   height: "200px",
              //   position: "relative",
              //   overflow: "hidden",
              // }}
              // className={`bg-gradient-to-br ${project.gradient}`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority={i < 2}
                />
              ) : (
                <span
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: project.accentColor,
                  opacity: 0.18,
                  letterSpacing: "-2px",
                  userSelect: "none",
                }}
            >
                {project.label}
              </span> 
              )}

              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: project.accentColor,
                  boxShadow: `0 0 12px ${project.accentColor}`,
                  animation: "pulse-dot 2s infinite",
                }}
              />
            </div>

            {/* Body */}
            <div style={{ padding: "24px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(0,153,255,0.1)",
                  border: "1px solid rgba(0,153,255,0.2)",
                  color: "var(--accent2)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              >
                {project.tag}
              </span>

              <div
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {project.name}
              </div>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.84rem",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: "18px",
                }}
              >
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "18px",
                }}
              >
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                      padding: "3px 10px",
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons (LIVE + GITHUB) */}
              <div style={{ display: "flex", gap: "10px" }}>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    style={{
                  display: "inline-block",
                  background: "rgba(0,153,255,0.1)",
                  border: "1px solid rgba(0,153,255,0.2)",
                  color: "var(--accent)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  textDecoration: "none",
                }}
                  >
                    🚀 Live Demo
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    style={{
                  display: "inline-block",
                  background: "rgba(0,153,255,0.1)",
                  border: "1px solid rgba(0,153,255,0.2)",
                  color: "var(--accent3)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                   textDecoration: "none"
                }}
                  >
                    💻 GitHub
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}