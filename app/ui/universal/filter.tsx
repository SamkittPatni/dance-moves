export default function Filter({ category, onCategoryChange }: { category: string; onCategoryChange: (category: string) => void;}) {
  return (
    // <select className="text-neutral-300 bg-neutral-950/95 border-neutral-500 border rounded-lg p-2" name="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
    //   <option value="all">All</option>
    //   <option value="restricted">Restricted (University Circuit)</option>
    //   <option value="prebronze">Pre-Bronze</option>
    //   <option value="bronze">Bronze</option>
    //   <option value="silver">Silver</option>
    //   <option value="gold">Gold</option>
    //   <option value="open">Open</option>
    // </select>
    <select className="md:w-max w-30 text-neutral-300 focus:outline-none focus:ring-0 border-0 border-b-2 rounded-lg p-2" name="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
      <option className="bg-neutral-950" value="all">All</option>
      <option className="bg-neutral-950" value="restricted">Restricted (University Circuit)</option>
      <option className="bg-neutral-950" value="prebronze">Pre-Bronze</option>
      <option className="bg-neutral-950" value="bronze">Bronze</option>
      <option className="bg-neutral-950" value="silver">Silver</option>
      <option className="bg-neutral-950" value="gold">Gold</option>
      <option className="bg-neutral-950" value="open">Open</option>
    </select>
  );
}
