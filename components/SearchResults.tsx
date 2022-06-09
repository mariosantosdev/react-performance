import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
