import { Search, Cloud } from "lucide-react";
import nowPlayingBg from "@/assets/now-playing-bg.jpg";

interface NowPlayingProps {
  currentTime: string;
  totalTime: string;
  progress: number;
}

export function NowPlaying({ currentTime, totalTime, progress }: NowPlayingProps) {
  return (
    <aside
      className="relative flex w-[420px] flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${nowPlayingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-lg font-medium">12:51</span>
            <Cloud className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">24°</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 backdrop-blur-sm transition-colors hover:bg-secondary/50">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-destructive bg-destructive/20">
              <div className="flex h-full w-full items-center justify-center text-destructive">
                <span className="text-sm font-bold">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Now Playing Info */}
        <div className="p-6">
          {/* Glass Card */}
          <div className="rounded-2xl border border-border/20 bg-card/40 p-6 backdrop-blur-xl">
            <span className="text-sm text-muted-foreground">Now Playing...</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground">Animals and Nature</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Big cat expert Boone Smith follows a strange trail of carnage and death to track cats in
              Patagonia. He documents their behavior - from kittens to killers.
            </p>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-foreground shadow-lg"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>{currentTime}</span>
                <span>{totalTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
