export default function Filter({ category, onCategoryChange }: { category: string; onCategoryChange: (category: string) => void;}) {
  return (
    <select name="category" value={category} onChange={(e) => onCategoryChange(e.target.value)} className="text-black">
      <option value="all">All</option>
      <option value="gold">Gold</option>
      <option value="silver">Silver</option>
      <option value="bronze">Bronze</option>
      <option value="unrestricted">Unrestricted</option>
      <option value="restricted">Restricted</option>
    </select>
  );
}
