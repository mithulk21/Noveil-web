"use client"

import dynamic from "next/dynamic"

/**
 * Fixed full-bleed backdrop: an animated WebGL grain gradient with a second,
 * CSS-only film-grain layer floated over it. The shader is client-only and
 * lazily loaded — the CSS gradient underneath is what paints first, and what
 * remains if WebGL is unavailable.
 */
const GrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.GrainGradient),
  { ssr: false }
)

export function GrainBackground({ grain = 0.34 }: { grain?: number }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden bg-[#ff730f]"
    >
      <div className="absolute inset-0 bg-linear-[149deg,#ff730f,#fc9b25]">
        <GrainGradient
          style={{ width: "100%", height: "100%", display: "block" }}
          colors={["#ff930f", "#ff930f"]}
          colorBack="#ff730f"
          softness={0.7}
          intensity={0.63}
          noise={0.82}
          shape="corners"
          speed={1.86}
        />
      </div>
      <div className="nv-noise absolute -inset-[10%]" style={{ opacity: grain }} />
    </div>
  )
}
