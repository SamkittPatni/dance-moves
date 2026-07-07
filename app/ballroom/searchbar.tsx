'use client';
import { useState } from 'react';

function Filter() {
  return (
    <select name="category" className="text-black">
      <option value="all">All</option>
      <option value="gold">Gold</option>
      <option value="silver">Silver</option>
      <option value="bronze">Bronze</option>
      <option value="unrestricted">Unrestricted</option>
      <option value="restricted">Restricted</option>
    </select>
  );
}


function Search() {
  const [query, setQuery] = useState('');
  function handleSearch(e) {
    setQuery(e.target.value);
  }
  return (
    <>
    <input name="query" onChange={handleSearch}/>
    </>
  );
}

export default function SearchBar({search}) {
    return (
      <>
	<Search />
	<Filter />
      </>
    );
}
