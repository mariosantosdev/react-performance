interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      {product.title} - <strong>R$ {product.price}</strong>
    </div>
  );
};
