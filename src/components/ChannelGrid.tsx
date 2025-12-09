import { useState ,useEffect,useMemo} from "react";
import { ChannelCard } from "./ChannelCard";
import { Channel, CountryChannelMap } from "../data/channels";

interface ChannelGridProps {
  selectedCountry: string; 
  selectedChannel: string | null;
  onSelectChannel: (id: string) => void;
}


export function ChannelGrid({
  selectedCountry,
  selectedChannel,
  onSelectChannel,
}: ChannelGridProps) {
    

  const initialChannels = useMemo(() => {

    return CountryChannelMap[selectedCountry] || [];
  }, [selectedCountry]); 


  const [channels, setChannels] = useState<Channel[]>(initialChannels);


  useEffect(() => {
    setChannels(initialChannels);
  }, [initialChannels]); 
  
  const toggleFavorite = (id: string) => {
    setChannels((prev) =>
      prev.map((ch) =>
        ch.id === id ? { ...ch, isFavorite: !ch.isFavorite } : ch,
      ),
    );
  };

  if (channels.length === 0) {
    return (
      <section className="flex-1 p-6 text-center text-muted-foreground">
        No channels available for this country.
      </section>
    );
  }

  return (
    <section className="flex-1 overflow-y-auto bg-background p-6">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
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
