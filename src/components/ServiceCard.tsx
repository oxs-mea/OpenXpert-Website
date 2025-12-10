import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group relative glass-card rounded-3xl p-8 transition-all duration-500 hover:scale-105",
        "animate-slide-in-up"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-effect -z-10" />
      
      {/* Icon container with gradient */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center backdrop-blur-sm border border-primary/10">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        {/* Floating decorative element */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent/50 animate-glow-pulse" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-3 text-foreground tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
      
      {/* Shimmer effect */}
      <div className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent group-hover:left-[100%] transition-all duration-1000" />
      </div>
    </div>
  );
};
