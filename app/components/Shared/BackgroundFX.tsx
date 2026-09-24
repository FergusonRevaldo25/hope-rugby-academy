// Fixed, full-site animated background: red glow orbs, speed streaks,
// halftone dots and floating neon shapes. Pure CSS (no JS) so it is cheap,
// and every animation is disabled under prefers-reduced-motion.

const STREAKS = [
  { top: "12%", w: "38vw", dur: 7, delay: 0 },
  { top: "22%", w: "26vw", dur: 5.5, delay: 2.2 },
  { top: "34%", w: "44vw", dur: 8.5, delay: 4 },
  { top: "46%", w: "30vw", dur: 6, delay: 1 },
  { top: "58%", w: "40vw", dur: 9, delay: 5.5 },
  { top: "68%", w: "24vw", dur: 5, delay: 3 },
  { top: "78%", w: "36vw", dur: 7.5, delay: 6.5 },
  { top: "90%", w: "28vw", dur: 6.5, delay: 0.8 },
];

export default function BackgroundFX() {
  return (
    <div className="fx-bg" aria-hidden="true">
      {/* red glow orbs */}
      <div
        className="fx-orb"
        style={{
          top: "-12%", left: "-8%", width: "48vw", height: "48vw",
          background: "radial-gradient(circle, rgba(242,35,62,0.42) 0%, transparent 65%)",
          animation: "fx-drift-a 22s ease-in-out infinite",
        }}
      />
      <div
        className="fx-orb"
        style={{
          bottom: "-18%", right: "-10%", width: "52vw", height: "52vw",
          background: "radial-gradient(circle, rgba(211,18,42,0.38) 0%, transparent 65%)",
          animation: "fx-drift-b 26s ease-in-out infinite",
        }}
      />
      <div
        className="fx-orb"
        style={{
          top: "38%", left: "34%", width: "30vw", height: "30vw",
          background: "radial-gradient(circle, rgba(90,60,220,0.26) 0%, transparent 65%)",
          animation: "fx-drift-a 30s ease-in-out infinite reverse",
        }}
      />

      {/* halftone dots */}
      <div className="fx-dots" style={{ top: "-8%", right: "-6%" }} />
      <div className="fx-dots" style={{ bottom: "-10%", left: "-8%", animationDirection: "reverse" }} />

      {/* speed streaks */}
      <div className="fx-streaks">
        {STREAKS.map((s, i) => (
          <span
            key={i}
            className="fx-streak"
            style={{
              top: s.top,
              width: s.w,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* neon outlines */}
      <svg
        className="fx-shape"
        style={{ top: "14%", left: "5%", width: 150, animation: "fx-float-rot 12s ease-in-out infinite" }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6"
      >
        <path d="M8 90 L50 10 L92 90 Z" strokeWidth="6" opacity="0.22" />
        <path d="M8 90 L50 10 L92 90 Z" />
      </svg>
      <svg
        className="fx-shape"
        style={{ top: "10%", right: "9%", width: 90, animation: "fx-float-rot 9s ease-in-out infinite 1s" }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6"
      >
        <path d="M8 12 L92 12 L50 88 Z" strokeWidth="6" opacity="0.22" />
        <path d="M8 12 L92 12 L50 88 Z" />
      </svg>
      <svg
        className="fx-shape fx-shape-lg"
        style={{ top: "42%", right: "-140px", width: 420, opacity: 0.3, animation: "fx-spin 90s linear infinite" }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="36" strokeDasharray="1.5 3" />
      </svg>
      <svg
        className="fx-shape"
        style={{ bottom: "8%", left: "12%", width: 110, animation: "fx-float-rot 14s ease-in-out infinite 3s" }}
        viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.6"
      >
        <path d="M50 8 L92 50 L50 92 L8 50 Z" strokeWidth="6" opacity="0.22" />
        <path d="M50 8 L92 50 L50 92 L8 50 Z" />
      </svg>

      <div className="fx-vignette" />
    </div>
  );
}
