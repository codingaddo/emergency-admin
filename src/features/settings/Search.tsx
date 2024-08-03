const Search = () => {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder="Search for products "
        className="w-[100%] px-5 border border-blue-950 rounded-l-md"
      />
      <button className="w-44 bg-blue-950 text-white py-2 font-medium border-x hover:bg-[#2e4d64]">
        Search
      </button>
    </div>
  );
};

export default Search;
