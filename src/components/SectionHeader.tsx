"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  desc?: string;
  center?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  desc,
  center = false,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: center ? "center" : "left" }}
    >
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
          marginBottom: "14px",
          justifyContent: center ? "center" : "flex-start",
        }}
      >
        {!center && (
          <span
            style={{
              width: 24,
              height: 1,
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
        )}
        {tag}
      </div>

      <h2
        style={{
          fontFamily: "var(--font-head)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-2px",
          lineHeight: 1.1,
          marginBottom: "14px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {desc && (
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
            fontWeight: 300,
            maxWidth: center ? "480px" : "500px",
            margin: center ? "0 auto" : undefined,
          }}
        >
          {desc}
        </p>
      )}
    </motion.div>
  );
}
