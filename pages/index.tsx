import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

type Product = {
  id: number;
  price: number;
  title: string;
};

type Results = {
  data: Product[];
  totalPrice: number;
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    const res = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: Product[] = await res.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product) => ({
      ...product,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setResults({ data: products, totalPrice });
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

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </div>
  );
};

export default Home;
