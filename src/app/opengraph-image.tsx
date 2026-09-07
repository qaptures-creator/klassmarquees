import { ImageResponse } from "next/og";

export const alt = "Klass Marquees — Luxury Marquee Hire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#04111f",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(80,122,154,0.28), transparent 45%), radial-gradient(circle at 80% 85%, rgba(156,190,211,0.14), transparent 45%)",
          color: "#f5f2eb",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            color: "#9cbed3",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Klass Marquees
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            textAlign: "center",
            padding: "0 90px",
            lineHeight: 1.2,
          }}
        >
          Extraordinary spaces. Unforgettable occasions.
        </div>
      </div>
    ),
    { ...size },
  );
}
