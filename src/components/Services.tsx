"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { services } from "@/data";

const colorMap: Record<string, string> = {
  green: "rgba(0,240,160,0.1)",
  blue: "rgba(0,153,255,0.1)",
  purple: "rgba(123,97,255,0.1)",
  orange: "rgba(255,160,0,0.1)",
  pink: "rgba(255,80,120,0.1)",
  cyan: "rgba(0,220,220,0.1)",
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="services"
      className="section-pad"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 60px",
      }}
    >
      <div style={{ marginBottom: "56px" }}>
        <SectionHeader
          tag="What I Do"
          title="Services I Offer"
          desc="From concept to deployment — I handle the full stack so you don't have to worry about a thing."
        />
      </div>

      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
        className="services-grid"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "36px 30px",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.4s, border-color 0.4s, box-shadow 0.4s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(0,240,160,0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Hover glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 0%, rgba(0,240,160,0.06), transparent 60%)",
                opacity: 0,
                transition: "opacity 0.4s",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "14px",
                background: colorMap[service.color] ?? "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {service.icon}
            </div>

            <div
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "10px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {service.name}
            </div>
            <div
              style={{
                color: "var(--muted)",
                fontSize: "0.86rem",
                lineHeight: 1.65,
                fontWeight: 300,
                position: "relative",
                zIndex: 1,
              }}
            >
              {service.desc}
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
}
