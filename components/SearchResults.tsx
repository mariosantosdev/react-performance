import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
    </div>
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={500}
        width={960}
        rowHeight={30}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};
