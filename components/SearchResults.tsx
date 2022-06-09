import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (productId: number) => void;
  totalPrice: number;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onAddToWishlist,
  totalPrice,
}) => {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};
