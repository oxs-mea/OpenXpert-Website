import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
}

export const FloatingShape = ({ className, delay = 0 }: FloatingShapeProps) => {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 pointer-events-none",
        delay % 2 === 0 ? "animate-float" : "animate-float-delayed",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};
