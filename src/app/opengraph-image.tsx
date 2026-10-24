import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Code Factory: your backlog on an assembly line";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(join(process.cwd(), "public/app-icon.png"));
  const src = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 90px",
          color: "white",
          background:
            "radial-gradient(60% 80% at 0% 100%, rgba(255,110,0,.55), transparent 70%), radial-gradient(50% 70% at 100% 0%, rgba(40,110,255,.5), transparent 70%), #07080b",
        }}
      >
        <img src={src} width={300} height={300} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3 }}>
            Code Factory
          </div>
          <div style={{ fontSize: 40, color: "#ffb13b", marginTop: 8 }}>
            Your backlog, on an assembly line.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,.6)",
              marginTop: 24,
            }}
          >
            Native macOS · Claude Code agents · Plain markdown · MIT
          </div>
        </div>
      </div>
    ),
    size,
  );
}
