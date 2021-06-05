import React, { ReactNode } from 'react';

interface SearchBarProp {
  placeholder?: string;
  handleOnchange: (value: string) => void;
}

const SearchBar = ({
  placeholder = 'Search Monster',
  handleOnchange,
}: SearchBarProp) => {
  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <input
        className="w-full max-w-md p-1 outline-none"
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleOnchange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
