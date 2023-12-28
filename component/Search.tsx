"use client"

import Link from 'next/link';
import React, { useState } from 'react';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
  }

const Search: React.FC<SearchProps> = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (onSearch:any) => {
        onSearch(searchTerm);
      };
    return (
        <>
            <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="my-4 p-2 border border-gray-300 rounded-md"
            />
            <button onClick={handleSearch} className='border border-sky-500 rounded-md px-5 py-3 mx-3'>Search</button>
        </>
    );
};

export default Search;