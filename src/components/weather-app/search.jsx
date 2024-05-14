export default function Search({ search, setSearch, handleSearch }) {
  return (
    <>
      <div className="search-engine">
        <input
          className="city-search"
          placeholder="Type a city..."
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button className="check-weather" onClick={handleSearch}>
          Check Weather
        </button>
      </div>
    </>
  );
}
