"use client";
import { useState } from 'react';
import Search from "@/assets/svg/Search.svg";
import Image from "next/image";

export default function SearchBar({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative w-80">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 pl-10 w-full"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Image src={Search} alt="Search Icon" width={20} height={20} />
        </div>
      </div>
      {query && (
        <ul className="bg-white border z-10 border-gray-200 mt-2 w-80 rounded-lg">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100">
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
