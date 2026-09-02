export default function SearchBar({ query, onChangeQuery}: {query: string; onChangeQuery: (query:string) => void;}) {
    return (
      <>
	      <input className="text-neutral-300 px-2 py-4 size-80 w-full h-full rounded-lg border border-neutral-500 bg-neutral-950/95" placeholder="Search..." value={query} onChange={(e) => onChangeQuery(e.target.value)}/>
      </>
    );
}
