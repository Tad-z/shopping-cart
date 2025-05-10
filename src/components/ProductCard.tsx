type Product = {
  _id: string;
  productImage: string;
  title: string;
  price: number;
  color: string;
  slug: string;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
    <img
      src={`/${product.productImage.replace(/\\/g, "/")}`}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-sm text-gray-500">Color: {product.color}</p>
      <p className="text-primary font-semibold mt-2">
        ₦{product.price.toLocaleString()}
      </p>
    </div>
  </div>
);

export default ProductCard;
