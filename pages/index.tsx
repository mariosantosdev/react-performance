import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    const res = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await res.json();

    setResults(data);
  }

  const addToWishlist = useCallback((productId: number) => {
    console.log(productId);
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} onAddToWishlist={addToWishlist} />
    </div>
  );
};

export default Home;
