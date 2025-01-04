"use client"
import { useState } from 'react';

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
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="border border-gray-300 rounded-lg p-2 w-80"
      />
      {query && (
        <ul className="bg-white border border-gray-200 mt-2 w-80 rounded-lg">
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
