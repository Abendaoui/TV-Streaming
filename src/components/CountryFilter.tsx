import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useState,useMemo } from "react";
import { countries } from "../data/countries";

interface CountryFilterProps {
  selectedCountry: string;
  onSelectCountry: (code: string) => void;
}

export function CountryFilter({
  selectedCountry,
  onSelectCountry,
}: CountryFilterProps) {

const [searchTerm, setSearchTerm] = useState("");
const filteredCountries = useMemo(() => {
    
    const sortedCountries = [...countries].sort((a, b) => 
      a.name.localeCompare(b.name)
    );
    if (!searchTerm) {
      return sortedCountries; 
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return sortedCountries.filter((country) =>
      country.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]);

  return (
    <aside className="flex h-full w-80 flex-col bg-sidebar border-r border-border">
      {/* Header */}
      <div className="flex items-center gap-3 p-6">
        <h1 className="text-xl font-semibold text-foreground">Select Country</h1>
      </div>
      {/* Search By Name */}
      <div className="flex items-center gap-3 px-6 pb-6">
        {/* Input Container with Search Icon */}
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-secondary/50 text-foreground border border-border rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
        </div>
      </div>  

      {/* Country List */}
      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        <div className="space-y-1">
          {filteredCountries.map((country) => (
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
    </aside>
  );
}
