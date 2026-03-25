import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
  "Initializing systems...",
  "Loading components...",
  "Compiling experiences...",
  "Preparing portfolio...",
  "Almost ready...",
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const stepText = loadingSteps[Math.min(Math.floor((progress / 100) * loadingSteps.length), loadingSteps.length - 1)];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 14 + 4;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return next;
      });
    }, 110);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#05060e" }}
        >
          {/* Background orbs */}
          {[
            { color: "rgba(139, 92, 246, 0.18)", x: "15%", y: "25%", size: 500 },
            { color: "rgba(6, 182, 212, 0.12)", x: "75%", y: "65%", size: 400 },
            { color: "rgba(232, 121, 249, 0.08)", x: "50%", y: "85%", size: 350 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                width: orb.size,
                height: orb.size,
                left: orb.x,
                top: orb.y,
                transform: "translate(-50%, -50%)",
                filter: "blur(70px)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3 + i * 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Particles */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#22d3ee" : "#f0abfc",
                opacity: 0,
              }}
              animate={{ y: [0, -(Math.random() * 80 + 40)], opacity: [0, 0.5, 0] }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated logo ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-10"
            >
              <div className="w-28 h-28 relative">
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(139, 92, 246, 0.2)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {/* Middle spinner */}
                <motion.div
                  className="absolute inset-3 rounded-full"
                  style={{
                    border: "2px solid transparent",
                    borderTopColor: "#8b5cf6",
                    borderRightColor: "#06b6d4",
                    borderBottomColor: "#e879f9",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner glow dot */}
                <motion.div
                  className="absolute inset-6 rounded-full"
                  style={{ background: "rgba(139, 92, 246, 0.1)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Logo text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono font-bold text-xl">
                    <span style={{ color: "#a78bfa" }}>&lt;</span>
                    <span className="text-white">B</span>
                    <span style={{ color: "#22d3ee" }}>/&gt;</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-2xl font-bold mb-1"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bhautik Davariya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-widest uppercase mb-10"
              style={{ color: "#475569" }}
            >
              Full Stack Developer
            </motion.p>

            {/* Progress */}
            <div className="w-72">
              <div className="relative h-1 rounded-full overflow-hidden mb-3" style={{ background: "#1e1b4b" }}>
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4, #e879f9)",
                    transition: "width 0.2s ease-out",
                  }}
                />
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-y-0 w-1/2 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                  }}
                  animate={{ left: ["-50%", "150%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono" style={{ color: "#475569" }}>{stepText}</span>
                <span className="text-xs font-mono font-bold" style={{ color: "#8b5cf6" }}>
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
