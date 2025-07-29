'use client';

import { useEffect, useState, useRef } from 'react';

export default function LoadingBar() {
  const [percent, setPercent] = useState(0);
  const [error, setError] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!error) {
      intervalRef.current = setInterval(() => {
        setPercent((prev) => {
          if (prev >= 99) {
            clearInterval(intervalRef.current!);
            setError(true); 
            return 99;
          }
          return prev + 1;
        });
      }, 400);
    } else {
      timeoutRef.current = setTimeout(() => {
        setError(false);
        setPercent(0);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [error]);

  return (
    <div className="w-80 rounded-full bg-gray-300 overflow-hidden relative h-8 shadow-lg select-none">
      {!error && (
        <div
          className="h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 transition-all duration-50 ease-linear"
          style={{ width: `${percent}%` }}
        />
      )}

      <span
        className="absolute inset-0 flex items-center justify-center font-semibold text-white drop-shadow-lg"
        aria-live="polite"
      >
        {error ? 'Internal Server Error.' : `${percent}%`}
      </span>
    </div>
  );
}
