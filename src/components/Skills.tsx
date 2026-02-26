"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { skillGroups, experience } from "@/data";

export default function Skills() {
  const ref = useRef(null);
  const expRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const expInView = useInView(expRef, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      className="section-pad"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 60px" }}
    >
      <SectionHeader
        tag="My Arsenal"
        title="Skills & Experience"
        desc="Technologies I work with daily and experience that backs it up."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginTop: "60px",
          alignItems: "start",
        }}
        className="skills-layout"
      >
        {/* Skills */}
        <div ref={ref}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: "32px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--muted)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                {group.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    style={{
                      background: skill.primary
                        ? "rgba(0,240,160,0.06)"
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${
                        skill.primary
                          ? "rgba(0,240,160,0.3)"
                          : "var(--border)"
                      }`,
                      borderRadius: "8px",
                      padding: "7px 14px",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: skill.primary ? "var(--accent)" : "var(--text)",
                      transition: "all 0.3s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(0,240,160,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        skill.primary ? "rgba(0,240,160,0.3)" : "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = skill.primary
                        ? "var(--accent)"
                        : "var(--text)";
                      (e.currentTarget as HTMLElement).style.background =
                        skill.primary
                          ? "rgba(0,240,160,0.06)"
                          : "rgba(255,255,255,0.04)";
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div ref={expRef}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--accent)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            <span style={{ width: 24, height: 1, background: "var(--accent)", display: "inline-block" }} />
            Experience
          </div>

          <div>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: 20 }}
                animate={expInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  padding: "24px 0",
                  borderBottom:
                    i < experience.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                    marginTop: 6,
                    boxShadow: "0 0 10px rgba(0,240,160,0.5)",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-head)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      color: "var(--accent2)",
                      fontSize: "0.84rem",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    {exp.company}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.76rem" }}>
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
