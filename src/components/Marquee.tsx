import { marqueeItems } from "@/data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              padding: "0 28px",
              fontFamily: "var(--font-head)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--accent)", fontSize: "1.1rem" }}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
