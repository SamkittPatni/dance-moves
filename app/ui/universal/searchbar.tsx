export default function SearchBar({ query, onChangeQuery}: {query: string; onChangeQuery: (query:string) => void;}) {
    return (
      <>
	<input value={query} onChange={(e) => onChangeQuery(e.target.value)} className="text-black bg-white my-2"/>
      </>
    );
}
