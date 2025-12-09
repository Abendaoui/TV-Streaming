import { useState } from "react";
import { ChannelCard } from "./ChannelCard";

interface Channel {
  id: string;
  name: string;
  logo: string;
  views: string;
  badges: string[];
  isFavorite?: boolean;
}

const initialChannels: Channel[] = [
  {
    id: "1",
    name: "Nat Geo Wild HD",
    logo: "NAT GEO WILD",
    views: "+8.2M",
    badges: ["HD", "EPG"],
    isFavorite: true,
  },
  {
    id: "2",
    name: "Disney Channel",
    logo: "Disney",
    views: "850K",
    badges: ["4K", "EPG", "$"],
  },
  {
    id: "3",
    name: "HBO Family",
    logo: "HBO",
    views: "1.7M",
    badges: ["HD", "EPG"],
  },
  {
    id: "4",
    name: "Discovery+",
    logo: "Discovery",
    views: "2.3M",
    badges: ["4K", "HDR"],
  },
  {
    id: "5",
    name: "ESPN Sports",
    logo: "ESPN",
    views: "5.1M",
    badges: ["HD", "LIVE"],
  },
  {
    id: "6",
    name: "CNN News",
    logo: "CNN",
    views: "3.8M",
    badges: ["HD", "24/7"],
  },
];

interface ChannelGridProps {
  selectedChannel: string | null;
  onSelectChannel: (id: string) => void;
}

export function ChannelGrid({
  selectedChannel,
  onSelectChannel,
}: ChannelGridProps) {
  const [channels, setChannels] = useState(initialChannels);

  const toggleFavorite = (id: string) => {
    setChannels((prev) =>
      prev.map((ch) =>
        ch.id === id ? { ...ch, isFavorite: !ch.isFavorite } : ch,
      ),
    );
  };

  return (
    <section className="flex-1 overflow-y-auto bg-background p-6">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {channels.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            isSelected={selectedChannel === channel.id}
            onSelect={() => onSelectChannel(channel.id)}
            onToggleFavorite={() => toggleFavorite(channel.id)}
          />
        ))}
      </div>
    </section>
  );
}
