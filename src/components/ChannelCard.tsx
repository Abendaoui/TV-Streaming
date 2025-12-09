import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Channel {
  id: string;
  name: string;
  logo: string;
  views: string;
  badges: string[];
  isFavorite?: boolean;
}

interface ChannelCardProps {
  channel: Channel;
  isSelected?: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}

export function ChannelCard({ channel, isSelected, onSelect, onToggleFavorite }: ChannelCardProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "group relative flex cursor-pointer flex-col rounded-2xl border p-4 transition-all duration-300",
        isSelected
          ? "border-primary/50 bg-card shadow-xl shadow-primary/10"
          : "border-border bg-card/50 hover:border-border hover:bg-card hover:shadow-lg"
      )}
    >
      {/* Logo Area */}
      <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-secondary/30">
        <span className="text-4xl font-bold text-foreground/80">{channel.logo}</span>
      </div>

      {/* Channel Info */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-foreground">{channel.name}</h3>
          <span className="text-sm text-muted-foreground">{channel.views} Views</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className={cn(
            "transition-colors",
            channel.isFavorite ? "text-accent" : "text-muted-foreground hover:text-accent"
          )}
        >
          <Star className={cn("h-5 w-5", channel.isFavorite && "fill-current")} />
        </button>
      </div>

      {/* Badges */}
      <div className="mt-3 flex flex-wrap gap-2">
        {channel.badges.map((badge) => (
          <span
            key={badge}
            className={cn(
              "rounded px-2 py-0.5 text-xs font-medium",
              badge === "4K" 
                ? "bg-primary/20 text-primary" 
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
