import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0B0B0F",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Losange extérieur */}
        <div
          style={{
            width: 20,
            height: 20,
            border: "1.5px solid #C8A951",
            transform: "rotate(45deg)",
            position: "absolute",
            borderRadius: 2,
          }}
        />
        {/* Losange intérieur plein */}
        <div
          style={{
            width: 10,
            height: 10,
            background: "#C8A951",
            transform: "rotate(45deg)",
            position: "absolute",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
