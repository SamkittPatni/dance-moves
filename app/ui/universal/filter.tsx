export default function Filter({ category, onCategoryChange }: { category: string; onCategoryChange: (category: string) => void;}) {
  return (
    <select className="text-black bg-white" name="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="all">All</option>
      <option value="restricted">Restricted (University Circuit)</option>
      <option value="prebronze">Pre-Bronze</option>
      <option value="bronze">Bronze</option>
      <option value="silver">Silver</option>
      <option value="gold">Gold</option>
      <option value="open">Open</option>
    </select>
  );
}
