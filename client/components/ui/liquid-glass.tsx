import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LiquidGlassProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "card" | "button" | "overlay";
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
  gradient?: boolean;
  shimmer?: boolean;
}

const LiquidGlass = ({
  className,
  variant = "default",
  blur = "md",
  opacity = 0.1,
  gradient = false,
  shimmer = false,
  children,
  ...props
}: LiquidGlassProps) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  const variantStyles = {
    default: "bg-background/20 border border-white/10",
    card: "bg-background/10 border border-white/10 rounded-2xl shadow-xl",
    button:
      "bg-background/20 border border-white/20 rounded-full hover:bg-background/30",
    overlay: "bg-black/20",
  };

  return (
    <motion.div
      className={cn(
        blurMap[blur],
        variantStyles[variant],
        gradient && "bg-gradient-to-br from-primary/5 to-secondary/5",
        "relative overflow-hidden transition-all duration-300",
        className,
      )}
      {...props}
    >
      {/* Background opacity layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Shimmer effect */}
      {shimmer && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      )}
    </motion.div>
  );
};

export { LiquidGlass };
