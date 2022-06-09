import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import lodash from "lodash";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () =>
    import("./AddProductToWishlist").then((mod) => mod.AddProductToWishlist),
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishlist: (productId: number) => void;
}

const ProductItemComponent: React.FC<ProductItemProps> = ({
  product,
  onAddToWishlist,
}) => {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>R$ {product.price}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar a lista de desejo
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
