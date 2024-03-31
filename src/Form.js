import { useEmoji } from "./context/EmojisContext";

function Form() {
  const { query, setQuery, handleSearch } = useEmoji();

  function search(e) {
    e.preventDefault();
    handleSearch(query);
  }
  return (
    <form className="form" onSubmit={search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your emoji"
      />
      <button>Search</button>
    </form>
  );
}

export default Form;
