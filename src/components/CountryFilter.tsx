import { cn } from "@/lib/utils";
import { ChevronLeft, Star, Tv } from "lucide-react";

interface Country {
  code: string;
  name: string;
  channels: number;
  flag: string;
}

const countries: Country[] = [
  {
    code: "IT",
    name: "Italy",
    channels: 89,
    flag: "https://flagcdn.com/w320/it.png",
  },
  {
    code: "UA",
    name: "Ukraine",
    channels: 56,
    flag: "https://flagcdn.com/w320/ua.png",
  },
  {
    code: "BR",
    name: "Brazil",
    channels: 124,
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    code: "DE",
    name: "Germany",
    channels: 98,
    flag: "https://flagcdn.com/w320/de.png",
  },
  {
    code: "US",
    name: "USA",
    channels: 147,
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    code: "FR",
    name: "France",
    channels: 112,
    flag: "https://flagcdn.com/w320/fr.png",
  },
  {
    code: "PT",
    name: "Portugal",
    channels: 67,
    flag: "https://flagcdn.com/w320/pt.png",
  },
  {
    code: "ZA",
    name: "South Africa",
    channels: 45,
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    code: "CN",
    name: "China",
    channels: 203,
    flag: "https://flagcdn.com/w320/cn.png",
  },
  { 
    code: "IN", 
    name: "India", 
    channels: 250, 
    flag: "https://flagcdn.com/w320/in.png" 
  },
  { 
    code: "JP", 
    name: "Japan", 
    channels: 180, 
    flag: "https://flagcdn.com/w320/jp.png" 
  },
  { 
    code: "MX", 
    name: "Mexico", 
    channels: 105, 
    flag: "https://flagcdn.com/w320/mx.png" 
  },
  { 
    code: "CA", 
    name: "Canada", 
    channels: 95, 
    flag: "https://flagcdn.com/w320/ca.png" 
  },
  { 
    code: "AU", 
    name: "Australia", 
    channels: 78, 
    flag: "https://flagcdn.com/w320/au.png" 
  },
  { 
    code: "NG", 
    name: "Nigeria", 
    channels: 62, 
    flag: "https://flagcdn.com/w320/ng.png" 
  },
  { 
    code: "RU", 
    name: "Russia", 
    channels: 155, 
    flag: "https://flagcdn.com/w320/ru.png" 
  },
  { 
    code: "KR", 
    name: "South Korea", 
    channels: 130, 
    flag: "https://flagcdn.com/w320/kr.png" 
  },
  { 
    code: "ES", 
    name: "Spain", 
    channels: 110, 
    flag: "https://flagcdn.com/w320/es.png" 
  },
  { 
    code: "NL", 
    name: "Netherlands", 
    channels: 85, 
    flag: "https://flagcdn.com/w320/nl.png" 
  }
];

interface CountryFilterProps {
  selectedCountry: string;
  onSelectCountry: (code: string) => void;
}

export function CountryFilter({
  selectedCountry,
  onSelectCountry,
}: CountryFilterProps) {
  const selectedCountryData = countries.find((c) => c.code === selectedCountry);

  return (
    <aside className="flex h-full w-64 flex-col bg-sidebar border-r border-border">
      {/* Header */}
      <div className="flex items-center gap-3 p-6">
        <h1 className="text-xl font-semibold text-foreground">Select Country</h1>
      </div>

      {/* Country List */}

      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        <div className="space-y-1">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => onSelectCountry(country.code)}
              className={cn(
                "flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200",
                selectedCountry === country.code
                  ? "bg-card border border-primary/30 shadow-lg"
                  : "hover:bg-secondary/30",
              )}
            >
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className={cn(
                    "h-10 w-10 rounded-full object-cover shadow-sm",
                    selectedCountry === country.code
                      ? "border border-white border-2 scale-125"
                      : "",
                  )}
              />
              <div className="flex flex-col items-start">
                <span
                  className={cn(
                    "font-medium",
                    selectedCountry === country.code
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
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
