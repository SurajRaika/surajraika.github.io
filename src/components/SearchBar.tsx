import React, { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
  id?: string;
}

export default function SearchBar({ onSearch, className = '', id = 'search-input' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-4 h-4 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input
        id={id}
        type="search"
        value={query}
        onChange={handleInputChange}
        className="block w-full py-2 pl-10 pr-3 text-sm rounded-md border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary"
        placeholder="Search posts..."
      />
    </div>
  );
}
