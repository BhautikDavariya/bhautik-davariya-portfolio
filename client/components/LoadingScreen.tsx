import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Liquid background effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  background: `radial-gradient(circle, ${
                    i % 3 === 0
                      ? "rgba(139, 69, 255, 0.2)"
                      : i % 3 === 1
                        ? "rgba(99, 102, 241, 0.2)"
                        : "rgba(168, 85, 247, 0.2)"
                  }, transparent 70%)`,
                  width: Math.random() * 400 + 200,
                  height: Math.random() * 400 + 200,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: "blur(40px)",
                }}
                animate={{
                  x: [0, Math.random() * 300 - 150],
                  y: [0, Math.random() * 300 - 150],
                  scale: [1, Math.random() * 0.8 + 0.6, 1],
                }}
                transition={{
                  duration: Math.random() * 8 + 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                &lt;Bhautik /&gt;
              </div>
              <div className="text-muted-foreground">
                Crafting Digital Experiences
              </div>
            </motion.div>

            {/* Animated progress bar */}
            <div className="w-80 mx-auto mb-6">
              <div className="relative h-2 bg-secondary/30 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              {progress < 30 && "Initializing components..."}
              {progress >= 30 && progress < 60 && "Loading assets..."}
              {progress >= 60 && progress < 90 && "Preparing experience..."}
              {progress >= 90 && "Almost ready..."}
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
