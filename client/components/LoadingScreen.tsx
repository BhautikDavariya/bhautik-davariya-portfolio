import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const STEPS = [
  "Initializing...",
  "Loading components...",
  "Compiling experiences...",
  "Almost ready...",
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const stepText = STEPS[Math.min(Math.floor((progress / 100) * STEPS.length), STEPS.length - 1)];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 14 + 5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 400);
          }, 250);
          return 100;
        }
        return next;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "var(--page-bg)" }}
        >
          {/* Ambient gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--brand-rgb),0.06) 0%, transparent 65%)",
            }}
          />

          {/* Horizontal grid lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(var(--brand-rgb),0.04) 1px, transparent 1px)",
              backgroundSize: "100% 90px",
              opacity: 0.5,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-10"
            >
              <div className="w-20 h-20 relative flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: "1px solid var(--border-brand-soft)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2.5 rounded-xl"
                  style={{
                    border: "1.5px solid transparent",
                    borderTopColor: "var(--brand-1)",
                    borderRightColor: "var(--brand-6)",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="font-mono font-bold text-lg relative z-10">
                  <span style={{ color: "var(--brand-1)" }}>&lt;</span>
                  <span style={{ color: "var(--text-strong)" }}>B</span>
                  <span style={{ color: "var(--brand-2)" }}>/&gt;</span>
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="font-black text-2xl tracking-tighter mb-1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, var(--brand-2), var(--brand-1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BHAUTIK DAVARIYA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-[11px] font-mono tracking-[0.2em] uppercase mb-12"
              style={{ color: "var(--text-dim)" }}
            >
              Full Stack Developer
            </motion.p>

            {/* Progress bar */}
            <div className="w-64">
              <div
                className="relative h-px rounded-full overflow-hidden mb-3"
                style={{ background: "var(--border-soft)" }}
              >
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--brand-4), var(--brand-1))",
                    transition: "width 0.15s ease-out",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono" style={{ color: "var(--text-dim)" }}>
                  {stepText}
                </span>
                <span
                  className="text-[10px] font-mono font-bold tabular-nums"
                  style={{ color: "var(--brand-1)" }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
