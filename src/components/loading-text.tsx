"use client";

import { cn, randomLoadingMessages } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingText = ({ className }: { className?: string }) => {
  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % randomLoadingMessages.length);
        setVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            className="overflow-hidden pb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div
              className="text-xs sm:text-base md:text-xl lg:text-3xl font-bold"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="text-white drop-shadow-md">{randomLoadingMessages[index]}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
