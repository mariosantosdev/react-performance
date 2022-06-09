import { memo } from "react";

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
  return (
    <div>
      {product.title} - <strong>R$ {product.price}</strong>
      <button onClick={() => onAddToWishlist(product.id)}>
        Add to wishlist
      </button>
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
