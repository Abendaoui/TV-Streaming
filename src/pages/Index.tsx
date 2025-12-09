import { useState, useEffect } from "react";
import { CountryFilter } from "@/components/CountryFilter";
import { ChannelGrid } from "@/components/ChannelGrid";
import { NowPlaying } from "@/components/NowPlaying";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [selectedChannel, setSelectedChannel] = useState<string | null>("1");
  const [progress, setProgress] = useState(85);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background dark">
      {/* Left Panel - Country Filter */}
      <CountryFilter
        selectedCountry={selectedCountry}
        onSelectCountry={setSelectedCountry}
      />

      {/* Middle Panel - Channel Grid */}
      <ChannelGrid
        selectedChannel={selectedChannel}
        onSelectChannel={setSelectedChannel}
      />

      {/* Right Panel - Now Playing */}
      <NowPlaying
        currentTime="01:52:37"
        totalTime="02:10:46"
        progress={progress}
      />
    </div>
  );
};

export default Index;
