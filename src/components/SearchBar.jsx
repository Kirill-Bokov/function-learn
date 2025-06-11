export const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск по описанию"
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};