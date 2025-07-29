'use client'
import { useEffect, useState } from 'react';

export function useElapsedTime() {
  const [elapsed, setElapsed] = useState(0); // in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  return {
    hours,
    minutes,
    seconds,
    formatted: `${pad(hours)} hours, ${pad(minutes)} minutes, ${pad(seconds)} seconds`
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}
