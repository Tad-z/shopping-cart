import ProductCard from "./ProductCard";
import { useProducts } from "./../hooks/useProduct";

const Products = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
