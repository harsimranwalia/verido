"use client";

import { cn } from "../../lib/utils";
import { useMemo, useState } from "react";

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 80,
  pauseOnHover = true,
  reverse = false,
  className,
}) {
  const [hovered, setHovered] = useState(false);

  const animationDuration = useMemo(() => {
    // Approximate duration from a virtual distance for smooth marquee motion.
    const distance = 2400;
    const safeSpeed = Math.max(10, speed);
    return `${Math.max(10, Math.round(distance / safeSpeed))}s`;
  }, [speed]);

  return (
    <div className={cn("overflow-hidden h-full", className)}>
      <div
        className={cn(
          "infinite-slider-track flex h-full w-max items-center",
          reverse && "infinite-slider-reverse"
        )}
        style={{
          gap: `${gap}px`,
          animationDuration,
          animationPlayState: hovered && pauseOnHover ? "paused" : "running",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
