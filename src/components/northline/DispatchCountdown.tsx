"use client";

import { useEffect, useMemo, useState } from "react";

function getDeadline() {
  const now = new Date();
  const target = new Date(now);
  target.setHours(15, 0, 0, 0);
  if (now > target) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function formatRemaining(ms: number) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function DispatchCountdown() {
  const [now, setNow] = useState(Date.now());
  const deadline = useMemo(() => getDeadline(), []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = deadline.getTime() - now;

  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
      Order in the next {formatRemaining(remaining)} for same-day dispatch.
    </p>
  );
}
