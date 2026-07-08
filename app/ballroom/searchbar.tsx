'use client';
import { useState } from 'react';

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
      </>
    );
}
