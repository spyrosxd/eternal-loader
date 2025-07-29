"use client";
import { useElapsedTime } from "@/hooks/useElapsedTime";

export default function Timer() {
  const { formatted } = useElapsedTime();
  return (
    <div className="mt-4 w-full drop-shadow-md text-white text-lg font-mono">
      <span>You&apos;ve waited{" "}</span>
      <span className="font-bold">{formatted}...</span>
      <span>{" "} Impressive</span>
    </div>
  );
}
