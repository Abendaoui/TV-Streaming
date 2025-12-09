import { useState, useEffect } from "react";
import { CountryFilter } from "@/components/CountryFilter";
import { ChannelGrid } from "@/components/ChannelGrid";
import { NowPlaying } from "@/components/NowPlaying";

const DEFAULT_COUNTRY_CODE = "IT";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY_CODE);
  const [selectedChannel, setSelectedChannel] = useState<string | null>("US1");
  const [progress, setProgress] = useState(85);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectCountry = (code: string) => {
        setSelectedCountry(code);
        setSelectedChannel(null); // Reset selected channel upon country change
    };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background dark">
      {/* Left Panel - Country Filter */}
      <CountryFilter
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
      />

      {/* Middle Panel - Channel Grid */}
      <ChannelGrid
        selectedCountry={selectedCountry} 
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
