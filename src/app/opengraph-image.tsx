import { ImageResponse } from "next/og";
export const alt =
  "Tyler Cox. Full-stack software engineering. Ohio State, May 2027.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4f1e9",
          color: "#24251f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "65px 75px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
          }}
        >
          <span>SOFTWARE ENGINEERING</span>
          <span>OHIO STATE ’27</span>
        </div>
        <div style={{ display: "flex", fontSize: 165, letterSpacing: "-10px" }}>
          Tyler Cox<span style={{ color: "#a54830" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #d3d0c6",
            paddingTop: 30,
            fontSize: 23,
            justifyContent: "space-between",
          }}
        >
          <span>Full-stack. Backend. Applied AI.</span>
          <span>Available June / July 2027</span>
        </div>
      </div>
    ),
    size,
  );
}
