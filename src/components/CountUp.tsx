"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  start?: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({
  end,
  start = 0,
  durationMs = 900,
  decimals,
  prefix = "",
  suffix = "",
  className
}: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(start);
  const hasAnimatedRef = useRef(false);

  const resolvedDecimals = useMemo(() => {
    if (typeof decimals === "number") {
      return decimals;
    }
    return Number.isInteger(end) ? 0 : 1;
  }, [decimals, end]);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || hasAnimatedRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setValue(end);
      hasAnimatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        const animationStart = performance.now();

        const animate = (timestamp: number) => {
          const progress = Math.min((timestamp - animationStart) / durationMs, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const nextValue = start + (end - start) * easedProgress;
          setValue(nextValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [durationMs, end, start]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {value.toFixed(resolvedDecimals)}
      {suffix}
    </span>
  );
}
