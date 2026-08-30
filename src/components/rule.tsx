import { cn } from "@/lib/utils"

/**
 * A hairline that draws itself on from one end once its enclosing `Reveal`
 * fires. `axis` picks the direction of travel; `origin` picks which end it
 * grows from, which is what lets a set of four trace a continuous perimeter.
 */
export function Rule({
  axis,
  origin,
  delay,
  duration,
  className,
}: {
  axis: "x" | "y"
  origin: "left" | "right" | "top" | "bottom"
  delay: number
  duration: number
  className?: string
}) {
  const originClass = {
    left: "origin-left",
    right: "origin-right",
    top: "origin-top",
    bottom: "origin-bottom",
  }[origin]

  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute bg-white/80 ease-[cubic-bezier(.16,1,.3,1)]",
        "transition-transform [will-change:scale]",
        originClass,
        axis === "x"
          ? "h-px scale-x-0 group-data-[revealed=true]/reveal:scale-x-100"
          : "w-px scale-y-0 group-data-[revealed=true]/reveal:scale-y-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
    />
  )
}
