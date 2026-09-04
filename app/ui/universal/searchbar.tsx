import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

export default function SearchBar({ query, onChangeQuery}: {query: string; onChangeQuery: (query:string) => void;}) {
    return (
      <div className="relative w-full h-full flex items-center text-neutral-300">
	      {/* <input className="text-neutral-300 px-2 py-4 size-80 w-full h-full rounded-lg border border-neutral-500 bg-neutral-950/95" placeholder="Search..." value={query} onChange={(e) => onChangeQuery(e.target.value)}/> */}
        <MagnifyingGlassIcon className="w-6 h-6 absolute ml-3" />
        <input className="placeholder-neutral-300 text-neutral-300 pl-12 pr-2 py-4 size-80 w-full h-full focus:outline-none focus:ring-0 border-0 border-b-2 rounded-lg" placeholder="Search..." value={query} onChange={(e) => onChangeQuery(e.target.value)}/>

      </div>
    );
}
