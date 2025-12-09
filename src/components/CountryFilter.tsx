import { cn } from "@/lib/utils";
import { ChevronLeft, Star, Tv } from "lucide-react";

interface Country {
  code: string;
  name: string;
  channels: number;
  flag: string;
}

const countries: Country[] = [
  { code: "IT", name: "Italy", channels: 89, flag: "🇮🇹" },
  { code: "UA", name: "Ukraine", channels: 56, flag: "🇺🇦" },
  { code: "BR", name: "Brazil", channels: 124, flag: "🇧🇷" },
  { code: "DE", name: "Germany", channels: 98, flag: "🇩🇪" },
  { code: "US", name: "United States", channels: 147, flag: "🇺🇸" },
  { code: "FR", name: "France", channels: 112, flag: "🇫🇷" },
  { code: "PT", name: "Portugal", channels: 67, flag: "🇵🇹" },
  { code: "ZA", name: "South Africa", channels: 45, flag: "🇿🇦" },
  { code: "CN", name: "China", channels: 203, flag: "🇨🇳" },
];

interface CountryFilterProps {
  selectedCountry: string;
  onSelectCountry: (code: string) => void;
}

export function CountryFilter({ selectedCountry, onSelectCountry }: CountryFilterProps) {
  const selectedCountryData = countries.find(c => c.code === selectedCountry);

  return (
    <aside className="flex h-full w-64 flex-col bg-sidebar border-r border-border">
      {/* Header */}
      <div className="flex items-center gap-3 p-6">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">Live TV's</h1>
      </div>

      {/* Country List */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="space-y-1">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => onSelectCountry(country.code)}
              className={cn(
                "flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200",
                selectedCountry === country.code
                  ? "bg-card border border-primary/30 shadow-lg"
                  : "hover:bg-secondary/30"
              )}
            >
              <span className="text-3xl">{country.flag}</span>
              <div className="flex flex-col items-start">
                <span className={cn(
                  "font-medium",
                  selectedCountry === country.code ? "text-foreground" : "text-muted-foreground"
                )}>
                  {country.name}
                </span>
                {selectedCountry === country.code && (
                  <span className="text-sm text-muted-foreground">
                    {country.channels} Channels
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-t border-border p-4">
        <div className="flex flex-col gap-2">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary">
            <Tv className="h-5 w-5" />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary">
            <Star className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
