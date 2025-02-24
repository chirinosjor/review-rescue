import { Search } from 'lucide-react';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Ingresa la url de tu negocio en google maps"
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pl-12 text-lg shadow-sm transition-shadow focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
    </div>
  );
}