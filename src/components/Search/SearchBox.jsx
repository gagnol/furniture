'use client';
import { TextField } from '@radix-ui/themes';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearQuery = () => {
    setQuery('');
    onSearch('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center w-full mb-2">
      <form 
        action="/search" 
        method="GET" 
        className="w-3/4 max-w-sm" 
        onSubmit={handleSubmit}
      >
        <div className="flex items-center bg-[#edecf2] rounded">
          <TextField.Root
            size="3"
            value={query}
            onChange={handleChange}
            name="q"
            placeholder="Search products"
            className="flex-grow px-4 py-2"
          >
            <TextField.Slot>
              <FaSearch className="text-gray-500" />
            </TextField.Slot>
            {query && (
              <TextField.Slot onClick={clearQuery} style={{ cursor: 'pointer' }}>
                <FaTimes className="text-gray-500" />
              </TextField.Slot>
            )}
          </TextField.Root>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
